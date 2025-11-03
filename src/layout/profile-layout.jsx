import { Link, Outlet } from "react-router-dom"
import icon1 from '../assets/profil/p-icon1.svg'
import icon2 from '../assets/profil/p-icon2.svg'
import icon3 from '../assets/profil/p-icon3.svg'
import icon4 from '../assets/profil/p-icon4.svg'
import icon5 from '../assets/profil/p-icon5.svg'
import icon6 from '../assets/profil/p-icon6.svg'
import { Profiledeck } from "../pages/profile/profildeck"

export const ProfileLoyout = () => {
    return (
        <div className="bg-gray-100 pt-[52px] pb-[121px]">
            <div className="container">
                <Profiledeck />
                <div className="flex gap-9 items-start">
                    <div className='w-[345px] bg-white flex flex-col gap-[7px] px-6 py-[42px]'>
                        <Link className="flex gap-4 text-[18px] py-2.5 font-medium" to={"/profile/obuna"}> <img src={icon1} alt="img" /> Обуна бўлиш</Link>
                        <Link className="flex gap-4 text-[18px] py-2.5 font-medium" to={"/profile/ehisob"}> <img src={icon2} alt="img" /> Э-Хисоб</Link>
                        <Link className="flex gap-4 text-[18px] py-2.5 font-medium" to={"/profile/saqlanganlar"}>  <img src={icon3} alt="img" /> Китобларим</Link>
                        <Link className="flex gap-4 text-[18px] py-2.5 font-medium" to={"/profile/saqlanganlar"}>  <img src={icon4} alt="img" /> Сақланганлар</Link>
                        <Link className="flex gap-4 text-[18px] py-2.5 font-medium" to={"/profile/sozlamalar"}>  <img src={icon5} alt="img" /> Созламалар</Link>
                        <Link className="flex gap-4 text-[18px] py-2.5 font-medium" to={"/"}>  <img src={icon6} alt="img" /> Тунги режим</Link>
                    </div>
                    <div className="grow">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
