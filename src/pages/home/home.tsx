import { Card } from "@/components/card/card"
import { useGetUserList } from "./service/query/useGetUserList"
import { CardSkleton } from "@/components/card/card-skleton"



export const Home = () => {

    const {data,isLoading,isError} =useGetUserList()

    return (
        <div className="container">
            <div>
                {
                    isLoading ? <CardSkleton /> :
                        <div>
                            {
                                data?.map((item) => (
                                    <Card key={item.id} id={item.id} title={item.title} discription={item.discription}/>
                                ))
                            }
                        </div>
                }
            </div>
        </div>
    )
}
