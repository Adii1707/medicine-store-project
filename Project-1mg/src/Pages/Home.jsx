import React from 'react'
import Navbar from '../Components/Navbar'
import Menues from '../Components/Menues'
import CarouselSlider from '../Components/CarouselSlider'
import Products from '../Components/Products'
import HomeBottom from '../Components/HomeBottom'
import HomeProducts from '../Components/HomeProducts'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Menues />
      <CarouselSlider/>
      {/* <Products/> */}
      <HomeProducts />
      <HomeBottom/>
    </div>
  )
}

export default Home;
