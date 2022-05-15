import React from 'react'
import Color from './Filters/Color'
import Price from './Filters/Price'
import Producer from './Filters/Producer'
import Rating from './Filters/Rating'

export const Sidebar = () => {
  return (
    <div className='w-1/4 sticky inset-y-0 left-0 bg-customWhite py-6 px-12 text-2xl'>
      Filters
      <div className='bg-gray-200 text-sm p-2 my-2 text-gray-500 rounded'>
        Search filters...
      </div>
      <Price />
      <Producer />
      <Rating />
      <Color />
    </div>
  )
}
