import React from 'react'
import { SotSIAL } from '../../data/sotsial'
import { PAYMENT } from '../../data/payment'
export const Link = () => {
  return (
    <div className='bg-[#0a0c1e]'>
        <div className='container'>
            <div className='flex gap-[131px] text-white pb-[34px] pt-3'>
                <div className=''>
                    <p className='font-light text-[14px] mb-3'>Ижтимоий тармоқлар</p>
                    <div className='flex gap-6'>
                        {
                            SotSIAL.map((e)=>(
                                <img src={e.name} alt="img" />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className='font-light text-[14px] mb-3'>Боғланиш</p>
                    <div className='flex gap-[23px]'>
                        <p>+998 90 253 77 53</p>
                        <p>support@liber.uz</p>
                    </div>
                </div>
                <div>
                    <p className='font-light text-[14px] mb-[7px]'>Биз қабул қиламиз</p>
                    <div className='flex gap-[9px]'>
                        {
                            PAYMENT.map((e)=>(
                                <img className='bg-white px-[9px] py-1.5' src={e.name} alt="img" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Link