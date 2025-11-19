import { useDispatch } from "react-redux"
import { addProduct } from "../store/reducer/product-reducer"

export const Products = ({prodact}) => {

    const servings=+prodact.servings*19
    const dispatch =useDispatch()

    const addStore=()=>{
        dispatch(addProduct({...prodact,servings}))
    }


    return (
        <>
            <div className='group w-[264px] text-[#1a1a1a] border border-[#e6e6e6] rounded-[5px] hover:border-[#2c742f] hover:shadow-[0_0_12px_0_rgba(32,181,38,0.32)] hover:text-[#2c742f]'>
                <img className=' w-full' src={prodact.image} alt="img" />
                <div className='flex justify-between items-center p-3 text-[#4d4d4d]'>
                    <div className=''>
                        <h3 className='group-hover:text-[#2c742f]'>{prodact.name}</h3>
                        <p className='font-medium text-[16px] text-[#1a1a1a] inline mr-1'>${prodact.servings}</p><p className='font-medium text-[16px] text-[#999] inline'><del>${prodact.servings}</del></p>
                        <div className='mt-1 mb-3 text-[#f4a51c] text-sm group-hover:text-[#2c742f] transition-colors duration-300'>
                            ★★★★☆
                        </div>
                    </div>
                </div>
                <button onClick={addStore} className="bg-green-500 p-8 cursor-pointer">Add</button>
            </div>
        </>
    )
}
