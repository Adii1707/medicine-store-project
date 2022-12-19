import React from 'react'
import Menues from '../Components/Menues'
import Navbar from '../Components/Navbar'
import Products_generic from '../Generic-components/Products_generic'
const Productpage2 = () => {
  return (
    <div>
       <Navbar />
     <Menues />
      <Products_generic url={"https://json-mock-cp-cl1n.onrender.com/products"}/>
    </div>
  )
}

export default Productpage2
