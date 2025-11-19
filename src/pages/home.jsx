import React, { useEffect, useState } from 'react'
import { Products } from '../components/products'

export const Home = () => {
    const [prodect, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes`)
            .then(res => res.json())
            .then(data => setProduct(data.recipes))
    }, [])
    console.log(prodect)
    return (
        <div className='container'>

            <div className='pb-[60px] grid grid-cols-5'>
                {
                    prodect.map(e => (
                        <Products key={e.id} prodact={e} />
                    ))
                }
            </div>

        </div>
    )
}
