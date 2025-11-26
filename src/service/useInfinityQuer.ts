import { request } from "@/config/request"
import type { GetInterface } from "@/pages/type/interface";
import { useInfiniteQuery } from "@tanstack/react-query"

export const useInfinityQuer = () => {
    return useInfiniteQuery({
        queryKey: ['users'],
        initialPageParam: 1,
        queryFn: ({ pageParam }) => request.get<GetInterface[]>('/todos', {
            params: {
                _page: pageParam,
                _limit: 5
            }
        }).then(req => req.data),
        getNextPageParam: (_lastPage, allPage, lastPageParam) => {
            return lastPageParam < 5 ? allPage.length + 1 : null;
        }
    })
}
