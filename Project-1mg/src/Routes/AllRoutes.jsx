import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Diseases } from '../Pages/Diseases';
import { Home } from '../Pages/Home';

export const AllRoutes = () => {

  return (
    <div>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/diseases"  element={<Diseases/>}/>

      </Routes>
    </div>
  )
}
