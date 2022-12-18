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
     <Route path="/Admin/:id/edit" element={<EditProduct></EditProduct>} />

    </Routes>
  )
}
