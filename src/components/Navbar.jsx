import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 flex justify-between items-center w-full px-20 py-5 text-primary'>
        <button className='text-3xl'>Navbar</button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div className='hidden lg:flex text-white text-lg font-light'>
            <button className='px-4 mx-1 hover:bg-pink-300 hover:bg-opacity-50 hover:text-primary hover:transition duration-500 active:bg-pink-200 rounded-3xl py-2'>Home</button>
            <button className='px-4 mx-1 hover:bg-pink-300 hover:bg-opacity-50 hover:text-primary hover:transition duration-500 active:bg-pink-200 rounded-3xl py-2'>Category</button>
            <button className='px-4 mx-1 hover:bg-pink-300 hover:bg-opacity-50 hover:text-primary hover:transition duration-500 active:bg-pink-200 rounded-3xl py-2'>Shop</button>
            <button className='px-4 mx-1 hover:bg-pink-300 hover:bg-opacity-50 hover:text-primary hover:transition duration-500 active:bg-pink-200 rounded-3xl py-2'>About</button>
        </div>
        <div className='hidden lg:flex text-white'>
            <button className='mr-4 rounded-full p-2 hover:bg-pink-300 hover:bg-opacity-50 hover:text-primary hover:transition duration-500 active:bg-pink-200'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            </button>
            <button className='rounded-full p-2 hover:bg-pink-300 hover:bg-opacity-50 hover:text-primary hover:transition duration-500 active:bg-pink-200'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            </button>
            
        </div>
    </div>
  )
}

export default Navbar