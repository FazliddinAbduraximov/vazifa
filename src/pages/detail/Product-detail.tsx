import { BackDrop } from "@/components/back-drop/back-drop"
import { CardSkleton } from "@/components/card/card-skleton"
import { useParams } from "react-router-dom"
import { useFindProduct } from "./service/query/useFindProduct"
import { Card } from "@/components/card/card"

export const ProductDetail = () => {
  const { id } = useParams()
  const { data, isLoading, isError } = useFindProduct(id as string)

  if (isError) {
    return <h1 className="text-8xl">User not found</h1>
  }

  if (isLoading) {
    return (
      <>
        <CardSkleton />
        <BackDrop />
      </>
    )
  }

  if (!data) {
    return <h1 className="text-5xl text-red-500">No data found</h1>
  }

  return (
    <div className="container">
      <Card
        key={data.id}
        id={data.id}
        title={data.title}
        discription={data.discription}
      />
    </div>
  )
}
