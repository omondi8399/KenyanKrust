'use client'

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext)
  return (
    <nav className="absolute w-full py-8 bg-pink-50/30">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-3 justify-between items-center">
        {/* logo */}
        <Link href='#' className="lg:max-w-max ">
          <h1 className="text-6xl  lg:text-8xl font-bangers drop-shadow-md">KenyanKrust</h1>
        </Link>
        {/* phone & cart */}
        <div className="flex gap-x-8 items-center">
          {/* phone */}
          <div className="flex gap-x-3 items-center">
            <Image src={'/phone.svg'} width={42} height={42} alt="" />
            <div className="text-white">
              <div className="font-robotoCondensed uppercase font-medium leading-none text-sm">24/7 Pizza delivery service</div>
            </div>
            <div className="text-3xl font-robotoCondensed font-extrabold leading-none tracking-wide">+254 707 606 757</div>
          </div>
          {/* cart */}
          <div onClick={() => setIsOpen(!isOpen) } className="relative cursor-pointer hidden lg:flex">
            <Image src={'bag.svg'} width={38} height={38} alt="" />
            {/* amount */}
            <div className="bg-tertiary w-6 h-6 rounded-full text-white flex justify-center items-center 
            text-[13px] font-robotoCondensed absolute -bottom-2 -right-1">{itemAmount}</div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Nav;
