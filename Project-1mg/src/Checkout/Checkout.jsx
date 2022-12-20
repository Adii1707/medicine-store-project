import { Box, Heading, Input, Flex, Spacer, Text, Grid, Button, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
  } from '@chakra-ui/react'
  import { useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import Menues from '../Components/Menues'
import Navbar from '../Components/Navbar'

export const Checkout = () => {
    const navigate = useNavigate();
  const toast=useToast()
  let total = JSON.parse(localStorage.getItem("total"));
  const [name, setName] = useState("");
  const [last_name, setLast_name] = useState("");
  const [house, setHouse] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
 const [Pincode, setPincode] = useState("");

  const address = {
    name: name,
    last_name: last_name,
    house_num: house,
    apartment: apartment,
    city: city,
    pincode: Pincode,
  }

  
// console.log(data);
  const handleSub = ()=>{
    toast({
      title: "Payment SuccessFully",
      // description: `${item.product_info}`,
      position: "top-center",
      status: "success",
      duration: 2000, 
      isClosable: true,
    });
    localStorage.setItem("address", JSON.stringify(address));
     //navigate("/Checkout");
  }
const data = JSON.parse(localStorage.getItem("address"));
  return (
    <>
     <Navbar />
     <Menues />
    
    <Flex width={"80%"}>
    <Box m={10}   w={"70%"} bg="gray.200" h={"auto"} shadow="md" >
        <Heading m={5} color={"gray.400"} >
            Delivery
        </Heading>
        <FormControl>
        <Box m="10px" >
        <FormLabel m={6}>Personal Details</FormLabel>
        <Flex gap={6} m={6}>
        <Box>
        <FormControl mb={2} ml={"-23px"} >Enter First Name</FormControl>   
        <Input type='text' value={name} onChange={(e)=> setName(e.target.value)} borderColor={"darkviolet"} />
        </Box>
        <Box>
        <FormControl  mb={2} ml={"-23px"}>Enter Last Name</FormControl>   
        <Input type='text' value={last_name} onChange={(e)=> setLast_name(e.target.value)} borderColor={"darkviolet"} />
        </Box>
        <Box>
        <FormControl mb={2} ml={"-20px"}>Enter Mobile Number</FormControl>   
        <Input type='number'  borderColor={"darkviolet"} />
        </Box>
        </Flex>
        </Box>
        <Box m="10px" >
        <FormLabel m={6} >Address Details</FormLabel>
        <Grid gap={6} m={6} templateColumns='repeat(3, 1fr)'>
        <Box>
        <FormControl mb={2} ml={"-23px"}>House no.</FormControl>   
        <Input type='number' value={house} onChange={(e)=> setHouse(e.target.value)} borderColor={"darkviolet"} />
        </Box>
        <Box>
        <FormControl mb={2} ml={"-18px"}>Enter Apartment name</FormControl>   
        <Input type='text' value={apartment} onChange={(e)=> setApartment(e.target.value)} borderColor={"darkviolet"} />
        </Box>
        <Box >
        <FormControl mb={2} ml={"-20px"}>Enter street details</FormControl>   
        <Input type='text'   borderColor={"darkviolet"} />
        </Box>
        <Box >
        <FormControl mb={2} ml={"-23px"}>Enter Landmark</FormControl>   
        <Input type='number'  borderColor={"darkviolet"} />
        </Box>
        <Box >
        <FormControl mb={2} ml={"-23px"}>Enter City Name</FormControl>   
        <Input type='text' value={city} onChange={(e)=> setCity(e.target.value)} borderColor={"darkviolet"} />
        </Box>
        <Box mb={6}>
        <FormControl mb={2} ml={"-23px"}>Enter Pincode</FormControl>   
        <Input type='number' value={Pincode} onChange={(e)=> setPincode(e.target.value)} borderColor={"darkviolet"} />
        </Box>
        </Grid>
        </Box>
 <Link to="/"> <Button m={6} fontSize={"20px"} bg={"green.500"} _hover={{bg:"red.400"}} placeItems="center"  onClick={handleSub} >PROCEED TO PAYMENT</Button> </Link>
</FormControl>
    </Box>
    <Box gap={"15px"} mt={10} shadow="md" width={"25%"} display={"flex"} flexDirection="column" justifyContent={"center"}>

         <Box  h={"300px"}>
            {/* <Flex gap="4px">
            <Text>{data.name}</Text> 
            <Text>{data.last_name}</Text>
            </Flex>
            <Text>{data.house_num}</Text>
            <Text>
              {data.apartment}
            </Text>
            <Text></Text>
            <Text></Text>
            <Text></Text> */}
            <Image w={"full"} src="https://res.cloudinary.com/du8msdgbj/image/upload/v1645088829/210921_TataNeu_appicon_light_24px_circle_3_1x_vxwibw.png" alt="pic" />

        </Box> 
    
    <Box  w={"full"} bg="gray.400" h={200}>
            <Heading fontSize='xl' m={4} >Order Summary</Heading>
            <Box>
                <Flex m={3}>
                <Text >Basket Value</Text>
                <Spacer />
                <Text>Rs {total}</Text>
                </Flex>
                <Flex m={3} >
                <Text>Delivery Charges</Text>
                <Spacer />
                <Text color="pink.600" fontSize={"lg"} >Free</Text>
                </Flex>
                <Flex m={3} >
                <Text color="black.600" fontSize={"xl"}>Total Amount</Text>
                <Spacer />
                <Text color="black.600" fontSize={"xl"} >{total}</Text>
                </Flex>
            </Box>
            </Box>
           </Box>
    </Flex>
    </>
  )
}