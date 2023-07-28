'use client'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { BsHandbagFill } from 'react-icons/bs'

const CartMobileIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext)

  return (
    <div onClick={() => setIsOpen(!isOpen)}
    className='bg-tertiary w-[72px] h-[72px] rounded-full flex justify-center items-center
    text-white cursor-pointer fixed right-[10%] bottonm-[5%] z-20 lg:hidden'>
      <BsHandbagFill className='text-4xl' />
      {/* amount */}
      <span className='absolute text-white bottom-3 right-4 gradient w-5 h-5 flex justify-center items-center rounded-full
      font-robotoCondensed text-[13px]'>
        3
      </span>
    </div>
    )  
};

export default CartMobileIcon;
