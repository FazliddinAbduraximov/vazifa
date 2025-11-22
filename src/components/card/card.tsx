import type { GetInterface } from "@/type/interface"

export const Card = ({title,discription}:GetInterface) => {
  return (
    <div className="border border-blue-400 rounded-2xl p-5 my-5">
        <h1 className="text-[50px] text-blue-600 mb-2">{title}</h1>
        <p className="text-[30px] text-blue-400">{discription}</p>
    </div>
  )
}
