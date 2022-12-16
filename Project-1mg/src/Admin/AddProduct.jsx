import React, { useState } from 'react';
import { Box, Button, Heading, Input, Spacer } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postdata } from '../Redux/AdminRedux/action';

export const AddProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [url,setUrl] = useState("");
    const [desc,setDesc] = useState("");
    const [price,setPrice] = useState("");

   
    const handleSubmit = ()=> {
        dispatch(postdata({url, desc, price}))
        .then((res)=>{
        navigate("/Admin")
        })
          }

  return (
    <>
    <Navbar />
    <Box alignItems={"center"} display="flex" flexDirection={"column"} m={10} justifyContent="center">
        <Heading>Add Products</Heading>
        <Box border={2} borderColor={"red.300"} m={7} w={"500px"}>
            <Input type={"text"} placeholder="Enter image url" value={url} onChange = {(e)=> setUrl(e.target.value)} />
            <Spacer />
            <Input type={"text"} placeholder="Enter Name" value={desc} onChange = {(e)=> setDesc(e.target.value)} />
            <Spacer />
            <Input type={"text"} placeholder="Enter Price" value={price} onChange = {(e)=> setPrice(e.target.value)} />
            <Spacer />
            <Button bg={"red.400"} color="black" margin={"3px"} onClick={handleSubmit}>Add Products</Button>
        </Box>
    </Box>
    </>
  )
}
