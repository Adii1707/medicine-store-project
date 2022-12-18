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
import {sliderImage} from "../Data/Data";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
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
      <Box bgColor="white" >
        <Flex pt="7px" gap="0px" borderBottom="2px solid #E0E0E0" m="auto" justifyContent={["center","center","center",""]} flexDirection={["column-reverse","column-reverse", "column-reverse", "row"]} >
          <Slider className="slider" {...settings} w={["450px", "600px","800px", "900px"]}>
            {sliderImage.map((elem, index) => {
              return (
                <Box key={index}>
                  <Image cursor="pointer" h="203px" w={["450px", "600px","800px", "900px"]} src={elem} />
                </Box>
              );
            })}
          </Slider>
          <Box>
            <Image cursor="pointer" h="203px" src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/16bfcc2c-7f57-4571-a29e-d69b0af564c8.png" />
          </Box>
        </Flex>
        <Flex borderBottom="2px solid #E0E0E0" h ="87px" alignItems="center" justifyContent="center" >
          <Text fontFamily= "Helvetica Neue" color="#666666" fontSize="22px" textAlign="center" >Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</Text>
        </Flex>
        <Flex p="30px 40px" alignItems="center" justifyContent="center" bgColor="#F6F6F6" >
          <Image cursor="pointer" src="https://onemg.gumlet.io/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" alt="image" />
        </Flex>
      </Box>
    );
  }
}
