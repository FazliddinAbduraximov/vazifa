import { request } from '@/config/request'
import type { GetInterface } from '@/pages/type/interface'
import { useQuery } from '@tanstack/react-query'

export const useSearch = (str:string="") => {
  return useQuery({
    queryKey:['search_item',str],
    queryFn:()=>request.get<GetInterface[]>('/todos',{
      params:{
        title_like:str,
      }
    }).then((res)=>res.data)
  })
}
