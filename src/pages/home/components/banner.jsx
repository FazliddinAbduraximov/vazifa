import { YANGI } from '../../../data/yangi'
import foto from '../../../assets/banner/image.png'
import { ProductCard } from '../../../components/productCard'
import strelka_r from '../../../assets/banner/strelka_r.png'
import strelka_l from '../../../assets/banner/strelka_l.png'
import like from '../../../assets/banner/like.svg'
import line from '../../../assets/banner/line.svg'

export const Banner = () => {
    return (
        <div className='container'>
            <div className='flex gap-6'>
                <div className='rounded-2xl  bg-[#eef4ff] flex'>
                    <div>
                        <h2 className='text-2xl p-8'>Кўп ўқилаётганлар</h2>
                        <img className='w-[287px] h-[274px] ' src={foto} alt="foto" />
                    </div>

                    <div className="flex grow items-center gap-4">
                        <img className='w-6 h-6' src={strelka_l} alt="img" />
                        <div className="grid grid-cols-3 gap-4 pt-8">
                            {
                                YANGI.slice(0, 3).map((e) => (
                                    <ProductCard
                                        key={e.id}
                                        img={e.img}
                                        title={e.title}
                                    />
                                ))
                            }
                        </div>
                        <img className='w-6 h-6 mr-6' src={strelka_r} alt="img" />
                    </div>
                </div>
                <div className='w-[261px] rounded-xl px-6 bg-[#3748a6]' style={{
                    backgroundImage: `url(${line})`,
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    backgroundSize: "auto"
                }}>
                    <div className='flex flex-col items-center'>
                        <h1 className=' text-2xl font-bold mt-8 mb-5 text-white text-center'>Китоб ўқишни ёқтирасизми?</h1>
                        <p className='text-2xl text-[18px] mt-8 mb-5 text-white text-center'>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                    </div>
                    <button className='w-full bg-amber-50 flex gap-[18px] rounded-[18px] px-6 py-[7px]'><img src={like} alt="img" /> <p className='text-[18px] font-bold'>Обуна бўлиш</p></button>
                </div>
            </div>
        </div>
    )
}
