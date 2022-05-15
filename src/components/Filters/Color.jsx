import React from 'react'

const Color = () => {
  return (
    <>
      <div className='text-lg text-gray-700 mt-4 mb-2'>Colors</div>
      <div className='mt-4 grid grid-cols-4 grid-rows-2 gap-4'>
        <div className='w-10 h-10 rounded-full bg-yellow-300'></div>
        <div className='w-10 h-10 rounded-full bg-green-400'></div>
        <div className='w-10 h-10 rounded-full bg-blue-400'></div>
        <div className='w-10 h-10 rounded-full bg-red-400'></div>
        <div className='w-10 h-10 rounded-full bg-purple-400'></div>
        <div className='w-10 h-10 rounded-full bg-primary'></div>
        <div className='w-10 h-10 rounded-full bg-black'></div>
        <div className='w-10 h-10 rounded-full bg-slate-400'></div>
      </div>
      <div className='mt-6 mx-2 p-4 rounded-lg flex flex-col justify-center items-center text-base bg-customGray'>
        <div className='text-center text-xl'>GET 20% OFF</div>
        <div className='text-center my-4 text-gray-400'>Share your referral link and get 20% off</div>
        <button className='rounded-xl py-2 px-4 bg-primary text-white w-3/4'>Share</button>
      </div>
    </>
  )
}

export default Color