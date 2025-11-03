import React from 'react'
import userfoto from '../../assets/profil/userfoto.png'


export const Profiledeck = () => {
  return (
    <div>
        <div>
            <div className='bg-white rounded-1 p-6 flex gap-[33px] items-center mb-[60px]'>
                <img src={userfoto} alt="img" />
                <div>
                    <h3 className='font-bold text-[30px]'>Суғдиёна Икромова</h3>
                    <p className='font-medium text-[20px] py-2.5'>+998 90 253 77 53</p>
                    <p className='font-medium text-[20px] text-[#9a9a9a]'>ID: 0001  Баланс: 45 000 сўм</p>
                </div>
            </div>
        </div>
    </div>
  )
}
