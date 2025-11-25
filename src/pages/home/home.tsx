import { Card } from "@/components/card/card"
import { useGetUserList } from "./service/query/useGetUserList"
import { CardSkleton } from "@/components/card/card-skleton"
import { BackDrop } from "@/components/back-drop/back-drop"
import { CreateProduct } from "@/components/form/form"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "react-router-dom"



export const Home = () => {

    const [searchParams, setSearchParams]=useSearchParams()

    const page=Number(searchParams.get('page') || 1)

    const { data, isLoading, isError } = useGetUserList(page);
    const buttons = Array(data?.pageSize || 1).fill(null);


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
                                data?.data?.map((item) => (
                                    <Card key={item.id} id={item.id} title={item.title} discription={item.discription} />
                                ))
                            }
                            <div className="flex justify-center gap-2 my-10">
                                {buttons.map((_, index) => 
                                <Button onClick={()=>setSearchParams({page:`${index+1}`})} 
                                key={index} className={`cursor-pointer hover:bg-red-600 
                                ${index+1===page ? 'bg-blue-700':""}`} 
                                size={"icon"}>{index + 1}</Button>)}
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
