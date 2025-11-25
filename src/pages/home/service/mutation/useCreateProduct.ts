import { request } from "@/config/request"
import type { PostInterface } from "@/pages/type/interface"
import { useMutation } from "@tanstack/react-query"


export const useCreateProduct = () => {
  return useMutation({
    mutationFn:(data:PostInterface)=>request.post('/todos',data).then((res)=>res.data),
  })
}
