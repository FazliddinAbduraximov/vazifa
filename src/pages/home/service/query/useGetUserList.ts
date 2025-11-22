import { request } from "@/config/request"
import type { GetInterface } from "@/type/interface"
import { useQuery } from "@tanstack/react-query"

export const useGetUserList = () => {
  return useQuery({
    queryKey:['user_list'],
    queryFn:()=>request.get<GetInterface[]>('/Boks').then(res=>res.data)
  })
}
