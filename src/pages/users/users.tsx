import { Card } from "@/components/card/card"
import { CardSkleton } from "@/components/card/card-skleton"
import { Spinner } from "@/components/ui/spinner"
import { useInfinityQuer } from "@/service/useInfinityQuer"
import { useIntersectionObserver } from "@uidotdev/usehooks"
import React from "react"

export const Users = () => {
    const { data, fetchNextPage, isLoading, hasNextPage,isFetching } = useInfinityQuer()
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    
    React.useEffect(() => {
    if (hasNextPage && entry?.isIntersecting) {
      fetchNextPage();
    }
  }, [entry?.isIntersecting]);

    return (
        <div className="container">
            {isLoading ? <CardSkleton /> :
                <>
                    {
                        data?.pages.map((page) =>
                            page.map((item) => <Card key={item.id} id={item.id} title={item.title} discription={item.discription} />))
                    }
                </>}
            {isFetching&&hasNextPage?<Spinner className="size-10" />:""}
            <div ref={ref}>
            </div>
        </div>
    )
}
