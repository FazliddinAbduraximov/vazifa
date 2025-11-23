import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreateProduct } from "@/pages/home/service/mutation/useCreateProduct"
import { Spinner } from "../ui/spinner"
import { useQueryClient } from "@tanstack/react-query"
import type { PostInterface } from "@/pages/type/interface"
import { useUpdateProduct } from "@/pages/home/service/mutation/useUpdateProduct"


const formSchema = z.object({
    title: z.string().min(2).max(30),
    discription: z.string().min(2).max(100),
})

export const CreateProduct = (defaultValue: PostInterface) => {
    const [open, setOpen] = useState(false)
    const { mutate, isPending } = useCreateProduct()
    const { mutate:update, isPending:updateLoading } = useUpdateProduct(defaultValue?.id as string)

    const cleint = useQueryClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            discription: "",
            ...(defaultValue ?? {})
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        if (defaultValue.id) {
            update(data,{
                onSuccess: () => {
                    cleint.setQueriesData({ queryKey: ['product_list'] },(oldDate:PostInterface[])=>{
                        return oldDate.map((item)=>item.id===defaultValue.id ? {...data, id:defaultValue.id}:item)
                    })
                    form.reset()
                    setOpen(false)
                },
                onError: (error) => { console.log(error) }
            })
        }
        else {
            mutate(data, {
                onSuccess: () => {
                    cleint.invalidateQueries({ queryKey: ['product_list'] })
                    form.reset()
                    setOpen(false)
                },
                onError: (error) => { console.log(error) }
            })
        }
    }


    return (
        <>
            <Button className="mt-5 cursor-pointer" onClick={() => setOpen(true)}>
                {defaultValue.id ? 'Edit' : "Submit"}
            </Button>
            <Dialog onOpenChange={(res) => setOpen(res)} open={open}>
                <DialogContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="discription"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>discription</FormLabel>
                                        <FormControl>
                                            <Input placeholder="title" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">
                                {defaultValue.id ? 'Edit' : "Submit"}
                                {isPending || updateLoading ? <Spinner /> : ""}
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}
