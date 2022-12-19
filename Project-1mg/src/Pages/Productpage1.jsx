
import React from "react";
import Products_generic from "../Generic-components/Products_generic";
import AllProducts from "../Components/AllProducts";
import Navbar from "../Components/Navbar";
import Menues from "../Components/Menues";
const Productpage1 = () => {
  return (
    <div>
       <Navbar />
     <Menues />
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


