import { ProductCard } from "../../../components/productCard"
import { YANGI } from "../../../data/yangi"

export const NewProduct=()=>{
    return (
        <div>
            <div className="container">
                <div>
                    <h1 className="font-semibold text-[32px]">Янги қўшилганлар</h1>
                    <div className="mt-8 mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {
                            YANGI.map((e)=>(
                                <ProductCard key={e.id} id={e.id} img={e.img} title={e.title} janr={e.janr} star={e.star} reyting={e.reyting} naush={e.naush} book={e.book} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}