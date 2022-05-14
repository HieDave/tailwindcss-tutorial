import React from 'react'
import Navbar from './Navbar'



const HeroSection = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen justify-center items-start p-20 bg-[url('https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-center bg-cover">
        <Navbar />
        <div className='text-6xl text-white font-light'>
          Best place to<br />
          buy your <div className='inline text-primary'>shoes</div>
        </div>
        <div className="mt-4 text-gray-200">It's ok to love shoes, we do too</div>
        <button className="mt-4 text-white bg-primary p-4 rounded-sm flex items-center justify-center">
          BUY NOW
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
    </div>
  )
}

export default HeroSection