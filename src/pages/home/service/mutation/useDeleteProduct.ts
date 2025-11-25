import { request } from "@/config/request"
import { useMutation } from "@tanstack/react-query"

export const useDeleteProduct = (id:string) => {
  return useMutation({
    mutationFn:()=>request.delete(`/todos/${id}`)
  })
}
