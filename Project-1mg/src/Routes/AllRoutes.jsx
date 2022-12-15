import React from 'react'

import { Route, Routes } from "react-router-dom";
import { Diseases } from '../Pages/Diseases';
import { Home } from '../Pages/Home';


import Productpage1 from '../Pages/Productpage1'

import Productpage2 from '../Pages/Productpage2'

export const AllRoutes = () => {

  return (
    <div>
      <Routes>

        <Route path="/"  element={<Home/>}/>
        <Route path="/diseases"  element={<Diseases/>}/>
        <Route path="/products1" element={<Productpage1/>}></Route>
        <Route path="/products2" element={<Productpage2/>}></Route>
      </Routes>
     </div>

  )
}
