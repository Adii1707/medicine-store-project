import React from 'react'
import Productpage1 from '../Pages/Productpage1'
import {Routes,Route} from "react-router-dom"
import Productpage2 from '../Pages/Productpage2'
import { Diseases } from '../Pages/Diseases'
import { Home } from '../Pages/Home'
import { SinglePage } from '../Pages/SingelePage'
import { Medicine } from '../Pages/Medicine'
export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/products1" element={<Productpage1/>}></Route>
        <Route path="/products2" element={<Productpage2/>}></Route>
        <Route path="/"  element={<Home/>}/>
        <Route path="/diseases"  element={<Diseases/>}/>
        <Route path="/diseases/:id"  element={<SinglePage/>}/>
        <Route path="/medicine"  element={<Medicine/>}/>

      </Routes>
     </div>
  )
}
