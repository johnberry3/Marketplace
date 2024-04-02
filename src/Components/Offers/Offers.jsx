import React from 'react'
import { exclusive_image } from '../Assets'
import '../Offers/Offers.css'

const Offers = () => {
  return (
    <div className='flex max-xl:flex-col m-auto py-0 px-[140px] gap-11 w-[85%] h-[60vh] offers'>
        <div>
            <h1 className='text-[80px] max-sm:text-[40px] font-semibold text-gray-900'>Exclusive</h1>
            <h1 className='text-[80px] max-sm:text-[40px] font-semibold text-gray-900'>Offers for You</h1>
            <p className='text-[20px] font-semibold'>ONLY ON BEST SELLERS PRODUCT</p>
            <button className='w-[282px] h-[70px] font-semibold mt-[30px] bg-red-500 text-white uppercase rounded-md'>check now</button>
        </div>
        <div className='flex-1 flex flex-col justify-end items-center pt-[50px]'>
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers