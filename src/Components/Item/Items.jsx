import React from 'react'

const Items = ({item}) => {
  return (
    <div className='w-[320px] transform hover:scale-105 1.5s '>
        <img src={item.image} alt="" />
         <p className='m-[6px 0px]'>{item.name}</p>
         <div className="item-prices flex gap-[20px]">
            <div className="item-price-new text-gray-500 text-[18px] font-semibold">
                ${item.new_price}
            </div>
            <div className='item-price-old text-gray-400 text-[17px] line-through font-semibold'>
                ${item.old_price}
            </div>
         </div>
    </div>
  )
}

export default Items