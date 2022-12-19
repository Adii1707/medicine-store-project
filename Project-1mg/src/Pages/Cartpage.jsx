import { Box, Button, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import {FiAlertCircle} from "react-icons/fi"
const Cartpage = () => {
    const [total,setTotal]=useState(0)
  let data = JSON.parse(localStorage.getItem("data"));
  const [count, setCount] = useState(1);
  let totalsum=0;
 let price1= data.map((item)=>{
    return totalsum+item.price
  })
  console.log("i am price",price1);
  return (
    <div style={{ backgroundColor: "gray" }}>
      <Box
        border="1px solid black"
        display="flex"
        width="80%"
        margin="auto"
        justifyContent="space-around"
        textAlign="left"
        height="900px"
      >
        <Box
          border="1px solid green"
          width="57%"
          height="auto"
          backgroundColor="white"
        >
          {data.map((items) => (
            <>
              <Box
                display="flex"
                justifyContent="space-around"
                color="#212121"
                padding="35px"
                fontSize="12px"
              >
                <Stack>
                  <Box display="flex" justifyContent="space-around">
                    <Box fontWeight="700" marginRight="250px">
                      {items.name}
                    </Box>
                    <Box>
                      <Box display="flex" fontWeight="700">
                        {" "}
                        <Icon
                          as={BiRupee}
                          fontWeight="700"
                          color="#212121"
                          mt="3px"
                          ml="2px"
                        />
                        {items.realprice}
                      </Box>
                      <Box
                        float="right"
                        display="flex"
                        fontSize="10px"
                        color="#9b9b9b"
                        mt="6px"
                      >
                        MRP
                        <Box textDecoration="line-through">{items.price}</Box>
                      </Box>
                      <br />
                      <br />
                    </Box>
                  </Box>

                  <Box
                    fontSize="10px"
                    display="flex"
                    color="#9e9e9e"
                    fontWeight="700"
                  >
                    <Box> {items.description}</Box>
                    <Box
                      display="flex"
                      marginLeft="390px"
                      justifyContent="center"
                      alignItems="center"
                      fontWeight="700"
                      fontSize="15px"
                      color="#212121"
                    >
                      <img
                        src="https://www.1mg.com/images/minus-cart.svg"
                        onClick={() => setCount(count - 1)}
                      />
                      {count}
                      <img
                        src="https://www.1mg.com/images/plus-cart.svg"
                        onClick={() => setCount(count + 1)}
                      />
                    </Box>
                  </Box>
                </Stack>
              </Box>
              <hr />
            </>
          ))}
        </Box>
        <Box
          
          width="37%"
          height="auto"
          backgroundColor="white"
        >
          <Box
           boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
            display="flex"
            padding="10px"
            fontSize="14px"
            position="relative"
          >
            <Box>

            <Box
              display="flex"
           
              width="37%"
              justifyContent="space-around"
            >
              </Box>
              <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg" />
              <Text>Apply Coupon</Text>
            </Box>
            <Image
              src="https://www.1mg.com/images/forward-rebrand.svg"
              width="20px"
              height="20px"
              position="absolute"
              marginLeft="350px"
            />
          </Box>
          <Box  padding="10px" mt="10px"boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Box display="flex" marginTop="30px" >
            <Box fontSize="16px" display="flex" justifyContent="center" alignItems="center"><h5>Check the health of your vital organs</h5>
            <Icon as={FiAlertCircle} marginLeft="95px" />
            </Box>
          
          </Box>
          <Box>
                <Box display="flex" fontSize="12px" marginTop="20px" alignItems="center">
                    <input type="checkbox" name="" id="" />
                    <Text ml="10px">Book Good Health Silver Package for just ₹649</Text>
                </Box>
                <Text fontSize="12px" mt="10px">Get the tests done easily from your home. This package will help you in identifying potential disorders and deficiencies at an early stage.</Text>
                <Text fontSize="12px" mt="10px" color="#1aab2a">Pay later on home sample collection</Text>
            </Box>
        </Box>
        <Box border="1px solid black" fontSize="14px">
            <Box display="flex"></Box>
<Text>Item Total(MRP)</Text>
<Text></Text>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Cartpage;
