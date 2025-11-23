import { request } from '@/config/request'
import type { GetInterface } from '@/pages/type/interface'
import { useQuery } from '@tanstack/react-query'

export const useFindProduct = (id:string) => {
  return useQuery({
    queryKey:['product',id],
    queryFn:()=>request.get<GetInterface>(`/Boks/${id}`).then((res)=>res.data)
  })

}
