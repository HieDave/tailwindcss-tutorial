import React from 'react'
import Navbar from './Navbar'



const HeroSection = () => {
  return (
    <div className="relative flex flex-col w-screen h-[36rem] justify-center items-start p-20 bg-[url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-center bg-cover">
        <Navbar />
        <div className='text-6xl text-white font-light'>
          Best place to<br />
          buy your shoes
        </div>
        <div className="mt-4 text-gray-200">It's ok to love shoes, we do too</div>
        <button className="mt-4 text-white bg-pink-400 p-4 pr-10 rounded-sm">BUY NOW</button>
    </div>
  )
}

export default HeroSection