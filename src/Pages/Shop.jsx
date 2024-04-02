import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <section className='mt-[100px]'>
        <Popular/>
        </section>
        <section className='mt-[100px]'>
        <Offers/>
        </section >
        <section className='mt-[100px]'>
        <NewCollection/>
        </section>
        <section>
          <Newsletter/>
        </section>
    </div>
  )
}

export default Shop