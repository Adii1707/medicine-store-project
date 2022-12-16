import React from "react";
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
import { settings } from "../Data/Data";

const SliderComp = ({ data, heading }) => {
  return (
    <Box bgColor="#F6F6F6" pb="40px">
      <Text fontSize="18px" textAlign="left" ml="40px">
        {heading}
      </Text>
      <Box
        bgColor="white"
        h="210px"
        mt="10px"
        p="10px"
        pt="0px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 1px 5px"
      >
        <Flex gap="0px" justifyContent="center" alignItems="center">
          <Slider className="homeSlider" {...settings}>
            {data.map((elem, index) => {
              return (
                <Box
                  key={index}
                  borderRadius="10px"
                  pt="20px"
                  h="210px"
                  fontSize="14px"
                  textAlign="center"
                  cursor="pointer"
                  _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                >
                  <Image src={elem.image} w="120px" m="auto" />
                  <Text w="150px" m="auto" mt="7px" h="40px"  overflow="hidden" >
                    {elem.name}
                  </Text>
                </Box>
              );
            })}
          </Slider>
        </Flex>
      </Box>
    </Box>
  );
};

export default SliderComp;
