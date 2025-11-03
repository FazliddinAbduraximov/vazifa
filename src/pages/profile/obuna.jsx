import React from 'react'
import img1 from '../../assets/profil/obuna/img1.svg'
import icon1 from '../../assets/profil/obuna/p-icon1.svg'

export const Obuna = () => {
  return (
    <div className='bg-white  pb-[121px]'>
      <img className='bg-[#ff7f4d] rounded-t-2xl' src={img1} alt="" />
      <div>
        <div className="w-full p-6">
          <h1 className="text-[30px] font-semibold mb-6 border-b w-max pb-1">Обуна</h1>
          <div className="flex justify-between">

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[14px] font-medium">Обуна давом этиш вакти</label>
                <div className="relative border rounded-2xl pl-3">
                  <input
                    type="text"
                    defaultValue="30 кун"
                    className="w-[350px] h-[70px] outline-none"
                  />
                  <img
                    src={icon1}
                    alt="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[16px]">Булимни танланг</label>
                <div className="relative border rounded-2xl pl-3">
                  <input
                    type="text"
                    defaultValue="Фантастика"
                    className="w-[350px] h-[70px]  outline-none"
                  />
                  <img
                    src={icon1}
                    alt="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  />

                </div>
              </div>

              <p className="text-[20px] font-semibold">Обунa 30 кун давом этади</p>
            </div>


            <div className="flex flex-col gap-6">
              <div className="bg-[#f5f5f5] p-5 rounded-xl w-[350px]">
                <div className="flex justify-between mb-2">
                  <span className="text-[16px]">Бошланиш вакти</span>
                  <span className="font-semibold">12/09/2021</span>
                </div>

                <div className="flex justify-between mb-2">
                  <span className="text-[16px]">Якунланиш вакти</span>
                  <span className="font-semibold">12/10/2021</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[16px]">Обунa нархи</span>
                  <span className="font-semibold text-[#2332a5]">12 000 сум</span>
                </div>
              </div>

              <button className="w-[350px] h-[60px] bg-[#3b47b8] rounded-xl text-white text-[18px]">
                Обунa бўлиш
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
