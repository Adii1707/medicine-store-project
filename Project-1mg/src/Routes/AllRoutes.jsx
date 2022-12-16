<<<<<<< HEAD
import React from "react";
import Productpage1 from "../Pages/Productpage1";
import { Routes, Route } from "react-router-dom";
import Productpage2 from "../Pages/Productpage2";
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products1" element={<Productpage1 />}></Route>
        <Route path="/products2" element={<Productpage2 />}></Route>
      </Routes>
    </div>
  );
};
=======
import React from 'react';
//import { Link, Route, Routes } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import { AddProduct } from '../Admin/AddProduct';
import { Admin } from '../Admin/Admin';
import { EditProduct } from '../Admin/EditProduct';
import { Home } from '../Pages/Home';

export const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home></Home>}  />
     <Route path="/Admin" element={<Admin></Admin>}  />
     <Route path="/add" element={<AddProduct></AddProduct>} />
     <Route path="/edit:id" element={<EditProduct></EditProduct>} />

    </Routes>
  )
}
>>>>>>> main
