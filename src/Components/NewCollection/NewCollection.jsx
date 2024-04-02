import React from 'react'
import new_collections from '../Assets/new_collections'
import Items from '../Item/Items'
import '../NewCollection/NewCollection.css'
const NewCollection = () => {
  return (
    <div className='flex flex-col items-center gap-10 min-h-screen'>
        <h1 className='text-[50px] font-semibold'>NEW COLLECTION</h1>
        <hr className='w-[100px] h-[6px] rounded-md border-2 bg-gray-900' />
        <div className="collections w-[1300px] justify-items-center max-xl:grid-cols-1 grid grid-cols-4 ">
            {new_collections.map((item, i)=>{
                return <Items key={i} item={item}/>
            })}
        </div>
    </div>
  )
}

export default NewCollection