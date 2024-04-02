import React from 'react'
import data_product from '../Assets/data'
import Items from '../Item/Items'


const Popular = () => {
  return (
    <div className='popular flex flex-col items-center max-xl:justify-center gap-10 min-h-screen'>
      <h1 className='text-[50px] max-sm:text-[30px] font-semibold'>POPULAR IN WOMEN</h1>
      <hr className='w-[100px] h-[6px] rounded-md border-2 bg-gray-900' />
      <div className="popular-item w-[1300px] max-xl:m-auto max-xl:w-full max-xl:flex-col flex gap-5">
         {data_product.map((item, i)=>{
            return  <Items key={i} item={item}/>
         })}
      </div>
    </div>
  ) 
}

export default Popular