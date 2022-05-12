import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 flex justify-between items-center w-screen px-20 py-5 text-pink-500'>
       <button className='text-3xl'>Navbar</button>
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