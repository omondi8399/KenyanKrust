import React, { useState,useEffect } from 'react'

import Image from 'next/image'

import SizeSelection from './SizeSelection';
import CrustSelection from './CrustSelection';
import Topping from './Topping';

const PizzaDetails = ({ pizza }) => {

  const [size, setSize] = useState('small')
  const [crust, setCrust] = useState('traditional')
  const [additionalTopping, setAdditionalTopping] = useState([])
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0)
  const [price, setPrice] = useState(0)

  useEffect(() => {
    size === 'small' ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2))  :
    size === 'medium' ?  setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2))  :
    size === 'large' ?  setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2))  :
    null
  }, [pizza, additionalToppingPrice, size])

  return <div>PizzaDetails</div>;
};

export default PizzaDetails;
