import { Card } from "@/components/card/card"
import { useGetUserList } from "./service/query/useGetUserList"
import { CardSkleton } from "@/components/card/card-skleton"
import { BackDrop } from "@/components/back-drop/back-drop"
import { CreateProduct } from "@/components/form/form"



export const Home = () => {

    const { data, isLoading, isError } = useGetUserList()
    if (isError) {
        return (
            <div className="container">
                <h1>Xatolik yuz berdi</h1>
            </div>
        )
    }
    return (
        <div className="container">
            <CreateProduct />
            <div>
                {
                    isLoading ?
                        <>
                            <CardSkleton />
                            <BackDrop />
                        </>
                        :
                        <div>
                            {
                                data?.map((item) => (
                                    <Card key={item.id} id={item.id} title={item.title} discription={item.discription} />
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}
