import React from 'react'
import { arrow_icon, hand_icon, hero_image } from './Assets'
import "../Components/Hero.css"

const Hero = () => {
  return (
    <div className='hero flex  max-xl:flex-col-reverse '>
        <div className="hero-left flex  justify-center  flex-col max-xl:p-6  p-[180px]">
             <h2>New Arrivals</h2>
             <div>
                 <div className="hand-icon flex items-center gap-[20px]">
                    <p className='max-sm:text-[40px] text-[80px] font-bold'>new</p>
                    <img  className='w-[105px]' src={hand_icon} alt="" />
                 </div>
                 <p className='max-sm:text-[40px] text-[80px] font-bold'>Collections</p>
                 <p className='max-sm:text-[40px] text-[80px] font-bold'>For Everyone</p>
             </div>
             <div className='hero-latest-btn font-semibold py-3 text-white flex gap-8 justify-center items-center w-[310px] h-[70px] rounded-3xl bg-red-400'>
                 <div>Latest Collection</div>
                 <img src={arrow_icon} alt="" />
             </div>
        </div>
        <div className="hero-right flex pt-10 max-xl:pt-0 mt-9 max-xl:items-start justify-center items-center flex-1">
           <img src={hero_image} className='max-sm:w-[300px]' alt="" />
        </div>
    </div>
  )
}

export default Hero