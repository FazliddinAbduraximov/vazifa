import { request } from "@/config/request"
import type { GetInterface } from "@/pages/type/interface"
import { useQuery } from "@tanstack/react-query"

export const useGetUserList = (page: number = 1, limit: number = 5) => {
  return useQuery({
    queryKey: ['product_list',page],
    queryFn: () => request.get<GetInterface[]>('/todos', {
      params: {
        _limit: limit,
        _page: page
      },
    }).then((res):{data:GetInterface[],pageSize:number} => {
      //@ts-ignore
      const pageTotal = res.headers.get("X-Total-count")
      const pageSize = Math.ceil(Number(pageTotal / limit))

      return { data: res.data, pageSize };
    })
  })
}
