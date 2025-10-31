import kvadrat from '../../assets/header/kvadrat.svg'
import strelka from '../../assets/header/strelka.svg'
import lupa from '../../assets/header/lupa.svg'
export const SearchBar = () => {
    return (
        <>
            <div className="w-[739px] ml-[46px] flex items-center">
                <div className=' flex gap-[18px] py-3 pl-6 pr-4 border border-[#e1e1e1] rounded-l-[14px]'>
                    <div className=' flex gap-4'>
                        <img src={kvadrat} alt="img" />
                        <a href="#">Рукнлар</a>
                    </div>
                    <img src={strelka} alt="img" />
                </div>
                <div className=' grow   bg-[#f8f8f8] flex'>
                    <input className='grow border border-[#e1e1e1]' type="text" />
                    <button className='border border-[#e1e1e1] rounded-r-[14px] py-3 px-[19px] border-l'><img src={lupa} alt="img" /></button>
                </div>
            </div>
        </>
    )
}