import shoeImage from '../img/shoe.png'

const ShopItem = ({props}) => {
    const { name, type, price } = props
  return (
    <div className='relative p-6 bg-white rounded-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute top-4 right-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <div className='flex justify-start items-center'>
            <img src={shoeImage} alt="shoe" />
        </div>
        <div className='text-base mt-8'>{name}</div>
        <div className='text-gray-400'>{type}</div>
        <div>ratings</div>
        <div className='text-lg text-black mt-2'>{`$${price}`}</div>
    </div>
  )
}

export default ShopItem