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
    specifiation: z.string().min(2).max(50),
    name: z.string()
        .min(2, { message: "Username kamida 2 ta belgidan iborat bo'lishi kerak" })
        .max(50, { message: "Username maksimal 50 ta belgidan oshmasligi kerak" }),
})


export const TeacherForm = () => {
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            specifiation: "",
            name:''
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // mutate(data, {
        //     onSuccess: (res) => {
        //         Cookie.set("token", res.data.token)
        //         Cookie.set("role", res.data.user.role.toLowerCase())
        //         toast.success(res.message.uz, {
        //             position: "bottom-right"
        //         })
        //         navigate(`/app/${res.data.user.role.toLowerCase()}`)
        //     },
        //     onError: (error) => {
        //         console.log(error)
        //     }
        // })
    }


    return (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[30px]">
                <FormField
                    control={form.control}
                    name="specifiation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>specifiation</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Specifiation" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="mobile">React Native</SelectItem>
                                        <SelectItem value="python">Python backend</SelectItem>
                                        <SelectItem value="java">Java backend</SelectItem>
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
                                <Input placeholder="Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
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
                <Button type="submit" className="w-full">{false ? <Spinner /> : ""}Submit</Button>
            </form>
        </Form>

    )
}
