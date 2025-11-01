import desc1 from '../../../assets/description/deck1.svg'
import desc2 from '../../../assets/description/deck2.svg'
import desc3 from '../../../assets/description/deck3.svg'
import desc4 from '../../../assets/description/deck4.svg'
export const Description = () => {
    return <>
        <div className='mt-14 mb-10'>
            <div className="container">
                <ul className='flex '>
                    <li className='flex gap-5 items-center'>
                        <div className='p-4 rounded-2xl bg-[#eef4ff]'>
                            <img src={desc1} alt="img" />
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[7px]'>Тезкор етказиш</h3>
                            <p className='text-[11px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </li>
                    <li className='flex gap-5 items-center'>
                        <div className='p-4 rounded-2xl bg-[#eef4ff]'>
                            <img src={desc2} alt="img" />
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[7px]'>Тўлов химояси</h3>
                            <p className='text-[11px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </li>
                    <li className='flex gap-5 items-center'>
                        <div className='p-4 rounded-2xl bg-[#eef4ff]'>
                            <img src={desc3} alt="img" />
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[7px]'>Юқори сифат</h3>
                            <p className='text-[11px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </li>
                    <li className='flex gap-5 items-center'>
                        <div className='p-4 rounded-2xl bg-[#eef4ff]'>
                            <img src={desc4} alt="img" />
                        </div>
                        <div>
                            <h3 className='text-[15px] font-bold mb-[7px]'>Энг capa китоблар</h3>
                            <p className='text-[11px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </>
}