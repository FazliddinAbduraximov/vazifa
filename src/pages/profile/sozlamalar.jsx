import user from '../../assets/header/person.svg'

export const Sozlamalar = () => {
    return (
        <div className='grow'>
            <div className="bg-white p-8 grow rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Созламалар</h2>

                <div className='flex items-center gap-5 mb-10'>
                    <div className='bg-[#3748a6] w-16 h-16 rounded-full flex justify-center items-center'>
                        <img src={user} alt="img" className="w-10 h-10" />
                    </div>
                    <p className="font-medium">Сурат юклаш</p>
                </div>

                <div className='flex flex-col gap-2 mb-6'>
                    <label>Исмингиз</label>
                    <input
                        className='p-4 w-[343px] border rounded-lg outline-none'
                        type="text"
                        placeholder='Исмингиз'
                    />
                </div>

                <button className='bg-[#3748a6] text-white py-3 rounded-lg w-[343px]'>
                    Сақлаш
                </button>
            </div>
        </div>
    )
}
