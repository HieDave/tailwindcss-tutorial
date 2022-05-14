import React from 'react'
import ShopItem from './ShopItem'

const ShopList = () => {
    const items = [
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },  
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        },
        {
            name: 'Nike',
            type: 'Air Force',
            price: '115',
        }
    ]
  return (
    <div className='w-3/4 bg-customGray p-4'>
        <div className='flex p-1 items-center'>
            <div className='flex items-center mr-3 text-gray-600'>Order by</div>
            <div className='flex items-center justify-center rounded-2xl border-2 border-primary px-4 py-1 mx-2 text-pink-600 bg-pink-100'>Price</div>
            <div className='flex items-center justify-center rounded-2xl border-2 border-gray-400 px-4 py-1 mx-2 text-gray-400'>Date</div>
        </div>
        <div className='grid grid-cols-4 mt-2 gap-2'>
            {items.map((object, index) => {
                return (
                    <ShopItem props={object} key={index}/>
                )
            })}
        </div>
    </div>
  )
}


export default ShopList