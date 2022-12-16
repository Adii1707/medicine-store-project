<<<<<<< HEAD
import React from "react";
import Products_generic from "../Generic-components/Products_generic";
import AllProducts from "../Components/AllProducts";
const Productpage1 = () => {
  return (
    <div>
      <Products_generic
        url={"https://json-mock-cp-cl1n.onrender.com/products"}
        w={"90%"}
        productlist={6}
        topproducts={"testing"}
      />
    </div>
  );
};

export default Productpage1;
=======
import React from 'react'
import Styles from "../Allcss/Product.module.css"
import { useEffect } from 'react'
import { getdata } from '../Redux/Product_Redux/action'
import { Image } from '@chakra-ui/react'
import Products_generic from '../Generic-components/Products_generic'
const Productpage1 = () => {
  return (
    <div >
<Products_generic url={"https://json-mock-cp-cl1n.onrender.com/products"}/>    
</div>
  )
}

export default Productpage1
>>>>>>> main
