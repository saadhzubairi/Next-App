import React from 'react'
import AddToCart from './addToCart'


const ProductCard = () => {
    return (
        <div className='p-8 text-lg my-1 mx-3 bg-sky-500 text-white 
        rounded-3xl hover:rounded-none hover:bg-blue-950 
        transition-all cursor-pointer active:bg-pink-700 active:rounded-full'>
            <div>ProductCard component lalala</div>
            <AddToCart />
        </div>
    )
}

export default ProductCard