import { request } from "@/config/request"
import type { GetInterface } from "@/pages/type/interface"
import { useQuery } from "@tanstack/react-query"

export const useGetUserList = () => {
  return useQuery({
    queryKey:['product_list'],
    queryFn:()=>request.get<GetInterface[]>('/Boks').then(res=>res.data)
  })
}
