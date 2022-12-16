import React from 'react'
import Navbar from '../Components/Navbar'
import Menues from '../Components/Menues'
import CarouselSlider from '../Components/CarouselSlider'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <Menues />
      <CarouselSlider/>
    </div>
  )
}

export default Home;
