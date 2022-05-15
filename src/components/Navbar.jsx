import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 flex justify-between items-center w-full px-20 py-5 text-primary'>
        <button className='text-3xl'>Navbar</button>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div className='hidden lg:flex text-white text-lg font-light'>
            <button className='px-4 mx-1'>Home</button>
            <button className='px-4 mx-1'>Category</button>
            <button className='px-4 mx-1'>Shop</button>
            <button className='px-4 mx-1'>About</button>
        </div>
        <div className='hidden lg:flex text-white text-lg'>
            Likes
            Cart
        </div>
    </div>
  )
}

export default Navbar