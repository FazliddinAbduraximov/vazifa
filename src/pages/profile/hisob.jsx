import payme from '../../assets/profil/xisob/payme.svg'
import click from '../../assets/profil/xisob/click.svg'
import walot from '../../assets/profil/xisob/walot.svg'

export const EHisob = () => {
    return (
        <div className="bg-white rounded-3xl p-6 border border-[#3b82f6]">
            <h2 className="text-[28px] font-semibold mb-6 text-[#2b2b2b]">Э-Хисоб</h2>

            <div className="bg-[#3c4ab4] rounded-xl text-white p-6 flex justify-between items-center relative">
                <div>
                    <p className="text-[16px] opacity-80">Баланс</p>
                    <p className="text-[28px] font-bold">45 000 сўм</p>
                </div>

                <img src={walot} alt="wallet" className="w-[90px] absolute right-0 bottom-0 " />
            </div>

            <div className="mt-6 space-y-4">
                <button className="w-full bg-white border border-gray-200 rounded-xl py-4 flex justify-center items-center text-[18px] font-medium hover:shadow">
                    <img src={payme} alt="Payme" className="w-[90px]" />
                </button>

                <button className="w-full bg-white border border-gray-200 rounded-xl py-4 flex justify-center items-center text-[18px] font-medium hover:shadow">
                    <img src={click} alt="Click" className="w-[90px]" />
                </button>
            </div>
        </div>
    );
};
