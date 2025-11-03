import walot from '../../assets/profil/xisob/walot.svg'
export const Exisob = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-[#3b82f6]">
      <h2 className="text-[28px] font-semibold mb-6 text-[#2b2b2b]">Хисобни тулдириш</h2>

      <div className="bg-[#3c4ab4] rounded-xl text-white p-6 flex justify-between items-center">
        <div>
          <p className="text-[16px] opacity-80">Баланс</p>
          <p className="text-[28px] font-bold">45 000 сўм</p>
        </div>
        <img src={walot} alt="img" />
      </div>

      <div className=''>
        <label htmlFor="soqqa"></label>
        <input type=""  id="soqqa" />
        <button className=" pt-[35px] pb-[66px] w-[343px] bg-[#3b82f6] rounded-[14px] py-4 text-[16px] font-medium text-center"></button>
      </div>

    </div>
  );
};
