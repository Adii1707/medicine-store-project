import React from 'react';
//import { Link, Route, Routes } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import { AddProduct } from '../Admin/AddProduct';
import { Admin } from '../Admin/Admin';
import { EditProduct } from '../Admin/EditProduct';
import { Home } from '../Pages/Home';
import Productpage2 from "../Pages/Productpage2";
import SingleProduct from "../Pages/SingleProduct";
import Productpage1 from "../Pages/Productpage1";
import {Diseases} from "../Pages/Diseases";
import {Medicine} from "../Pages/Medicine";
import { Checkout } from '../Checkout/Checkout';

export const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home></Home>}  />
     <Route path="/Admin" element={<Admin></Admin>}  />
     <Route path="/add" element={<AddProduct></AddProduct>} />
     <Route path="/Admin/:id/edit" element={<EditProduct></EditProduct>} />
    <Route path="/products1" element={<Productpage1 />}></Route>
     <Route path="/products2" element={<Productpage2 />}></Route>
    <Route path="/singleproduct/:user_id" element={<SingleProduct />}></Route>
    <Route path="/disease" element={<Diseases ></Diseases>} ></Route>
    <Route path="/medicine" element={<Medicine ></Medicine>} ></Route>
    <Route path="/Checkout" element={<Checkout ></Checkout>} ></Route>
    </Routes>
  )
}
