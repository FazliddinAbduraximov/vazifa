import { YANGI } from "../data/yangi"
import { AUDIO } from "../data/audio"
import { useParams } from "react-router-dom"
import star2 from '../assets/star2.svg'
import sms from '../assets/route/sms.svg'
import dastavka from '../assets/dastavka.svg'
import naush from '../assets/naush2.svg'
import book from '../assets/book2.svg'

export const ProductDitail = () => {
    const { id } = useParams()
    console.log(id)

    let malumot = YANGI.find((e) => e.id == id)
    if (malumot) {
        return (
            <div className="container">
                <div className="flex items-start gap-10 mt-6">
                    <img className="w-[300px] h-[422px] shrink-0" src={malumot.img} alt="" />

                    <div className="flex flex-col w-full">
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <h3 className="text-[32px] font-bold leading-[38px]">{malumot.title}</h3>
                                <p className="text-sm mt-1 text-[#5c5c5c]">{malumot.janr}</p>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex gap-4">
                                    <img src={malumot.naush} alt="" />
                                    <img src={malumot.book} alt="" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        <img src={malumot.star} alt="" />
                                        <img src={malumot.star} alt="" />
                                        <img src={malumot.star} alt="" />
                                        <img src={malumot.star} alt="" />
                                        <img src={star2} alt="" />
                                    </div>
                                    <p className="font-bold text-2xl">{malumot.reyting}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src={sms} alt="" />
                                    <p className="text-[14px] font-medium whitespace-nowrap">235-Фикрлар</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="mt-6 max-w-[750px] text-[15px] leading-[23px] text-[#484848]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <ul className="flex gap-[83px] my-5 border-b border-dashed border-gray-400">
                                <li>
                                    <p>Муаллиф</p>
                                    <h2 className="mt-2 font-semibold text-[18px]">Kevin Smiley</h2>
                                </li>
                                <li>
                                    <p>Нашриёт</p>
                                    <h2 className="mt-2 font-semibold text-[18px]">Wepress Inc.</h2>
                                </li>
                                <li>
                                    <p>Йил</p>
                                    <h2 className="mt-2 font-semibold text-[18px]">1999</h2>
                                </li>
                            </ul>

                            <div className="flex gap-4">
                                <button className="flex items-center text-white px-4 gap-3 bg-[#3748ab] rounded-[14px]"><img className="py-2.5 " src={dastavka} alt="" /> Сотиб олиш - 65 000 сум</button>
                                <button className="flex items-center text-white px-4 gap-3 bg-[#3748ab] rounded-[14px]"><img className="py-2.5 " src={naush} alt="" /> Аудио тинглаш - 55 000 сум</button>
                                <button className="flex items-center text-white px-4 gap-3 bg-[#3748ab] rounded-[14px]"><img className="py-2.5 " src={book} alt="" />Онлайн укиш - 45 000 сум</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    malumot = AUDIO.find((e) => e.id == id)
    if (malumot) {
        return (
            <div className="container">
                <div className="flex items-start gap-10 mt-6">
                    <img className="w-[300px] h-[422px] shrink-0" src={malumot.img} alt="" />

                    <div className="flex flex-col w-full">
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <h3 className="text-[32px] font-bold leading-[38px]">{malumot.title}</h3>
                                <p className="text-sm mt-1 text-[#5c5c5c]">{malumot.janr}</p>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex gap-4">
                                    <img src={malumot.naush} alt="" />
                                    <img src={malumot.book} alt="" />
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        <img src={malumot.star} alt="" />
                                        <img src={malumot.star} alt="" />
                                        <img src={malumot.star} alt="" />
                                        <img src={malumot.star} alt="" />
                                        <img src={star2} alt="" />
                                    </div>
                                    <p className="font-bold text-2xl">{malumot.reyting}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <img src={sms} alt="" />
                                    <p className="text-[14px] font-medium whitespace-nowrap">235-Фикрлар</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="mt-6 max-w-[750px] text-[15px] leading-[23px] text-[#484848]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <ul className="flex gap-[83px] my-5 border-b border-dashed border-gray-400">
                                <li>
                                    <p>Муаллиф</p>
                                    <h2 className="mt-2 font-semibold text-[18px]">Kevin Smiley</h2>
                                </li>
                                <li>
                                    <p>Нашриёт</p>
                                    <h2 className="mt-2 font-semibold text-[18px]">Wepress Inc.</h2>
                                </li>
                                <li>
                                    <p>Йил</p>
                                    <h2 className="mt-2 font-semibold text-[18px]">1999</h2>
                                </li>
                            </ul>

                            <div className="flex gap-4">
                                <button className="flex items-center text-white px-4 gap-3 bg-[#3748ab] rounded-[14px]"><img className="py-2.5 " src={dastavka} alt="" /> Сотиб олиш - 65 000 сум</button>
                                <button className="flex items-center text-white px-4 gap-3 bg-[#3748ab] rounded-[14px]"><img className="py-2.5 " src={naush} alt="" /> Аудио тинглаш - 55 000 сум</button>
                                <button className="flex items-center text-white px-4 gap-3 bg-[#3748ab] rounded-[14px]"><img className="py-2.5 " src={book} alt="" />Онлайн укиш - 45 000 сум</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if(!malumot){
        return <div><h2>NOT FOUND</h2></div>
    }



}
