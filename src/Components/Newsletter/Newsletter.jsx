import React from 'react'
import '../Newsletter/Newsletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter w-[85%] h-[40vh] flex flex-col items-center m-auto justify-center mt-[150px] gap-[30px]'>
        <h1 className='text-[55px] text-gray-700 font-semibold'>Get Exclusive Offers on Your Email</h1>
        <p className='text-[20px] text-gray-600'>Subscribe to Our Newsletter and Stay Updated</p>
        <div className='bg-white flex items-center justify-between w-[730px] h-[70px] rounded-lg border-2 border-gray-400 '>
            <input type="text" className='w-[500px] outline-none border-none text-gray-500 ml-[30px]' placeholder='Your Email id' />
            <button className='w-[210px] bg-black text-white h-[70px] rounded-lg'>Subsribe</button>
        </div>
    </div>
  )
}

export default Newsletter