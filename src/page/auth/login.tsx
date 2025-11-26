import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { PasswordInput } from "@/components/ui/password-input"
import { useLogin } from "./service/useLogin"
import { Spinner } from "@/components/ui/spinner"
import Cookie from 'js-cookie'
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"



const formSchema = z.object({
    username: z.string()
        .min(2, { message: "Username kamida 2 ta belgidan iborat bo'lishi kerak" })
        .max(50, { message: "Username maksimal 50 ta belgidan oshmasligi kerak" }),
    password: z.string()
        .min(2, { message: "Parol kamida 2 ta belgidan iborat bo'lishi kerak" })
        .max(50, { message: "Parol maksimal 50 ta belgidan oshmasligi kerak" }),
    role: z.enum(["admin", "teacher", "student"])
        .refine(val => ["admin", "teacher", "student"].includes(val), {
            message: "Role faqat 'admin', 'teacher' yoki 'student' bo'lishi mumkin"
        })
})


export const Login = () => {
    const { mutate, isPending } = useLogin()
    const navigate=useNavigate()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            role: "admin",
        },
    })

   const onSubmit = (data: z.infer<typeof formSchema>) => {
    mutate(data, {
        onSuccess: (res) => {
            Cookie.set("token",res.data.token)
            Cookie.set("role",res.data.user.role.toLowerCase())
            toast.success(res.message.uz,{
                position:"bottom-right"
            })
             navigate(`/app/${res.data.user.role.toLowerCase()}`)
        },
        onError: (error) => {
            console.log(error)
        }
    })
}


    return (

        <div className="fixed inset-0 flex justify-center items-center bg-[#F8F7F0]">
            <Button className="absolute top-[30px] right-[30px]">Sign Up</Button>
            <div className="w-[500px] shadow rounded-2xl p-6 bg-white">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[30px]">
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="admin">admin</SelectItem>
                                                <SelectItem value="teacher">teacher</SelectItem>
                                                <SelectItem value="student">student</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput placeholder="12345" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">{isPending ? <Spinner /> : ""}Submit</Button>
                    </form>
                </Form>
            </div>
        </div>

    )
}
