import type { GetInterface } from "@/pages/type/interface"
import { Link } from "react-router-dom"
import { CreateProduct } from "../form/form"
import { Button } from "../ui/button"
import { useDeleteProduct } from "@/pages/home/service/mutation/useDeleteProduct"
import { useQueryClient } from "@tanstack/react-query"

export const Card = ({ id, title, discription }: GetInterface) => {
  const queryClient = useQueryClient()

  const { mutate } = useDeleteProduct(id)

  const deleted = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.setQueryData<GetInterface[]>(['product_list'], (oldData) => {
          return (oldData || []).filter(item => item.id !== id)
        })
      }
    })
  }
  return (
    <div className="border border-blue-400 rounded-2xl p-5 my-5">
      <h1 className="text-[50px] text-blue-500 mb-2 hover:text-blue-600">
        <Link to={`product/${id}`}>{title}</Link>
      </h1>
      <p className="text-[30px] text-blue-400">{discription}</p>
      <CreateProduct id={id} title={title} discription={discription} />
      <Button className="ml-5" onClick={deleted}>Delete</Button>
    </div>
  )
}
