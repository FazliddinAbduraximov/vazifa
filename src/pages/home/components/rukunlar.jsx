import RukunlarCard from "../../../components/rukunlarCard"
import { RUKUNLAR } from "../../../data/rukunlar"
export const Rukunlar = () => {
    return <>
        <div>
            <div className="container">
                <div>
                    <h2 className="font-semibold text-8">Рукнлар</h2>
                    <div className=" pt-8 pb-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                        {
                            RUKUNLAR.map((e) => (
                                <RukunlarCard
                                    key={e.id}
                                    img={e.img}
                                    text={e.title}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}