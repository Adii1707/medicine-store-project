import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Spacer, Text } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postdata } from '../Redux/AdminRedux/action';
import { CheckIcon } from '@chakra-ui/icons';

export const AddProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [url,setUrl] = useState("");
    const [desc,setDesc] = useState("");
    const [price,setPrice] = useState("");
    const [name,setName] = useState("");
     
   
    const handleSubmit = ()=> {
        dispatch(postdata({url, name, desc, price}))
        .then((res)=>{
        navigate("/Admin")
        })
          }

  return (
    <Box h={"full"} >
    <Navbar />
    <Box w={"100%"}  bg={"yellow.700"} h={'500px'} alignItems={"center"} display="flex" gap={3} flexDirection={"column"} mt={10} justifyContent="center">
    <Heading width={"full"} mt={"-38px"} p={3} bg={'orange.100'}>ADD PRODUCTS</Heading>
    <Box  w={"500px"} h={"full"} border={2} display="flex" gap={2} flexDirection={"column"} m={10} justifyContent="center" borderColor={"red.300"}  >
         <Flex  gap={2}>
         <Text fontSize={"20px"} fontWeight={"medium"} fontStyle={"inherit"}>Image:</Text>
          <Input color={'white'} fontWeight={"medium"} borderColor={"green.400"} type={"text"} placeholder="Enter image url" value={url} onChange = {(e)=> setUrl(e.target.value)} />
         </Flex>
         <Spacer />
         <Flex gap={3}>
         <Text fontSize={"20px"} fontWeight={"medium"} fontStyle={"inherit"}>Name:</Text>
          <Input color={'white'} fontWeight={"medium"} borderColor={"green.400"} type={"text"} placeholder="Enter Name" value={name} onChange = {(e)=> setName(e.target.value)} />
          
         </Flex>
        <Spacer />
        <Flex gap={3}>
        <Text fontSize={"20px"} fontWeight={"medium"} fontStyle={"inherit"}>Description:</Text>
          <Input color={'white'} fontWeight={"medium"} borderColor={"green.400"} type={"text"} placeholder="Enter Description" value={desc} onChange = {(e)=> setDesc(e.target.value)} />
        </Flex>
          <Spacer />
          <Flex gap={3}>
          <Text fontSize={"20px"} fontWeight={"medium"} fontStyle={"inherit"}>Amount:</Text>
          <InputGroup>
  <InputLeftElement
    pointerEvents='none'
    color='gray.600'
    fontSize='1.2em'
    children='$'
  />
  <Input fontWeight={"medium"} type={"text"} color={'white'} borderColor={"green.400"} placeholder='Enter amount' value={price} onChange = {(e)=> setPrice(e.target.value)} />
  {/* <InputRightElement children={<CheckIcon color='green.500' />} /> */} 
</InputGroup>
{/* <Input type={"text"} placeholder="Enter Price" value={price} onChange = {(e)=> setPrice(e.target.value)} /> */}
          </Flex>
          <Spacer />
          <Button bg={"red.400"} color="black" margin={"3px"} onClick={handleSubmit}>ADD PRODUCTS</Button>
      </Box>
      </Box>
  </Box>
  )
}
