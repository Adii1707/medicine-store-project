import React, { Component } from "react";
import Slider from "react-slick";
import {Image} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Navbar.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings} style={{border:"1px solid black", width:"300px" }} >
          <div>
            <Image w="300px" src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          </div>
          <div>
          <Image w="300px" src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          </div>
          <div>
          <Image w="300px" src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          </div>
          <div>
          <Image w="300px" src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          </div>
          <div>
          <Image w="300px" src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          </div>
          <div>
          <Image w="300px" src ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
