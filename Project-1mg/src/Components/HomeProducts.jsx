import React, { Component } from "react";
import Slider from "react-slick";
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Button,
  Text,
  Flex,
  Link,
  VStack,
  Input,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Slider.css";
import { HomeData } from "../Data/Data";
import SliderComp from "./Slider";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };

    return (
      <Box>
        <SliderComp settings={settings} data={HomeData.healthConcerns} heading="Shop by health concerns"/>
        <SliderComp settings={settings} data={HomeData.FeaturedBrands} heading="Featured brands" />
      </Box>
    );
  }
}
