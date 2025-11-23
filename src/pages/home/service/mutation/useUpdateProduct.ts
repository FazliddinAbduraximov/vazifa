import { request } from "@/config/request"
import type { UpdateInterface } from "@/pages/type/interface"
import { useMutation } from "@tanstack/react-query"

export const useUpdateProduct = (id:string) => {
  return useMutation({
    mutationFn:(data:UpdateInterface)=>request.put(`/Boks/${id}`,data).then((res)=>res.data)
  })
}
