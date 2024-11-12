import React from 'react'
import { BsChatSquareDots } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4 '>
        <div className="flex items-center justify-center m-auto">
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)]'/>
            <h1 className="text-xl font-bold text-gray-700 p-2 ">WEEKAWAY</h1>
        </div>
        <h3 className="text-center m-4 text-gray-700">built whit ❤️ by Mahdi Samanbari</h3>
      
    </div>
  )
}

export default Footer
