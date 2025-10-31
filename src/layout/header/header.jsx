import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg"
import { SearchBar } from './searchbar'
import strelka from '../../assets/header/strelka.svg'
import person from '../../assets/header/person.svg'
import flag from '../../assets/header/flag.svg'
import { Nawbar } from './nawbar'

export const Header = () => {
  return (
    <header className="p-[21px]">
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div>
            <div className="flex grow">
              <Link to={'/'}>
                <img src={logo} alt="logo" />
              </Link>
              <SearchBar/>
            </div>
          </div>
          <div className='flex gap-5'>
            <button className='w-[105px] px-[9px] py-4 flex justify-between items-center bg-[#eef4ff] rounded-[14px]'>
              <img src={flag} alt="" />
              <p>Ўз</p>
              <img src={strelka} alt="" />
            </button>
            <button className='w-[151px] px-6 py-3 flex gap-4 rounded-[14px] bg-[#3f51b5]'>
              <img className='w-6 h-6' src={person} alt="" />
              <p>Кириш</p>
            </button>
          </div>
        </div>
      </div>
      <Nawbar />
    </header>
  )
}