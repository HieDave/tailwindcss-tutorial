import React from 'react'
import shoe from '../img/shoe.png'

const ShopList = () => {
  return (
    <div className='col-span-3 bg-customGray p-4'>
        <div className='flex p-1 items-center'>
            <div className='flex items-center mr-3 text-gray-600'>Order by</div>
            <div className='flex items-center justify-center rounded-2xl border-2 border-primary px-4 py-1 mx-2 text-pink-600 bg-pink-100'>Price</div>
            <div className='flex items-center justify-center rounded-2xl border-2 border-gray-400 px-4 py-1 mx-2 text-gray-400'>Date</div>
        </div>
        <div className='grid grid-cols-4 mt-2'>
            <div className='relative p-6 bg-white rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-4 right-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div className='flex justify-start items-center'>
                    <img src={shoe} alt="shoe"/>
                </div>
                <div className='text-base mt-8'>Nike</div>
                <div className='text-gray-400'>Air Force 1</div>
                <div>ratings</div>
                <div className='text-lg text-black mt-2'>$115</div>
            </div>
        </div>
    </div>
  )
}


export default ShopList