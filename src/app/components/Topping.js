import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import { IoMdCheckmark } from 'react-icons/io'

const Topping = ({ topping, additionalTopping, settAdditionalTopping }) => {
  //checkbox state
  const [isChecked, setIsChecked] = useState(false)

  //handle checkbox
  const handleCheckBox = () => {
    setIsChecked(!isChecked)
  }

  //handle topping
  const handleTopping = () => {
    if (isChecked) {
      // use set to ensure unique values
      const newToppings = new Set([...additionalTopping, {...topping }])
      settAdditionalTopping(Array.from(newTopping))
    } else {
      // remove the topping with the matching name
      const newToppings = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name
      })
      settAdditionalTopping(newToppings)
    }
  }

  useEffect(() => {
    handleTopping()
  },[isChecked]) 
  return (
    <div className={`${isChecked && 'border-orange'} w-full max-w-[110px] h-[140px] p-1 flex flex-col
    items-center justify-center border rounded-md bg-white relative`}
    >
      <Image src={topping.image} width={70} height={70} alt='' className='mb-2' />
      {/* topping name */}
      <div className='text-sm capitalize text-center bg-pink-200 font-medium'>
        {topping.name}
      </div>
      {/* Checkbox */}
      <input className='absolute w-full h-full opacity-0 cursor-pointer'
      type='checkbox' checked={isChecked} onChange={handleCheckBox} />
      {/* Checkbox Icon */}
      <div className={`${isChecked ? 'opacity-100' : 'opacity-0'} absolute top-1 right-1`}>
        <IoMdCheckmark className='text-xl text-orange' />
      </div>
    </div>
    );
};

export default Topping;
