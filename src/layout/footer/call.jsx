import appstore from '../../assets/footer/appstore.png'
import googleplay from '../../assets/footer/googleplay.png'

export const Call = () => {
  return (
    <div className='bg-[#eef4ff] pt-[31px] pb-[63px]'>
        <div className='container'>
            <div>
                <ul className='flex gap-[140px]'>
                    <li>
                        <h2 className='text-[20px] font-bold pb-3.5'>Платформа хақида</h2>
                        <p className='text-[18px] font-normal pb-4.5'>Liber ўзи нима?</p>
                        <p className='text-[18px] font-normal pb-4.5'>Фойдаланиш шартлари</p>
                        <p className='text-[18px] font-normal pb-4.5'>Ёрдам</p>
                    </li>
                    <li>
                        <h2 className='text-[20px] font-bold pb-3.5'>Обуна хақида</h2>
                        <p className='text-[18px] font-normal pb-4.5'>Обуна бўлиш</p>
                        <p className='text-[18px] font-normal pb-4.5'>Қандай тўлаш</p>
                    </li>
                    <li>
                        <h2 className='text-[20px] font-bold pb-3.5'>Китоблар</h2>
                        <p className='text-[18px] font-normal pb-4.5'>Аудио китоблар</p>
                        <p className='text-[18px] font-normal pb-4.5'>Электрон китоблар</p>
                        <p className='text-[18px] font-normal pb-4.5'>Китоблар</p>
                    </li>
                    <li>
                        <h2 className='text-[20px] font-bold pb-3.5'>Мобил илова</h2>
                        <img className='mb-4' src={appstore} alt="img" />
                        <img src={googleplay} alt="img" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Call