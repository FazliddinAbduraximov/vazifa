import { request } from '@/config/request'
import type { GetInterface } from '@/pages/type/interface'
import { useQuery } from '@tanstack/react-query'

export const useSearch = () => {
  return useQuery({
    queryKey:['search_item'],
    queryFn:()=>request.get<GetInterface[]>('/todos').then((res)=>res.data)
  })
}
