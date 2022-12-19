import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { json, Link } from 'react-router-dom';
import { deletetask, getdata } from "../Redux/AdminRedux/action";

import { updateData } from '../Redux/AdminRedux/action';

export const FetchData =  () => {
   const data = useSelector((store)=> store.Adminreducer.Data);
   const total = data?.length;
   localStorage.setItem("Total", total);
   const dispatch = useDispatch();
// const [data, setData] = useState([]);
// const dispatch=useDispatch()
  
let update =()=>{
  let upt = data.map((d)=> {
    if(d.id===updateData.id){
      return updateData
    }
    return d;
  });
  getdata()
}


   useEffect(()=>{
   dispatch(getdata());
   },[dispatch])
  
  //  console.log(data);

    function handleDelete(id){
      dispatch(deletetask(id)).then((res)=>{
        dispatch(getdata())
      })
    }
    // const handleDelete = (img) => {
    //   //console.log("data-", data)
    //   data.slice(img, 1);
    //   console.log(img, "data:", data)
    // };

  return (
    <Grid gap={3} templateColumns='repeat(4, 1fr)'  w={"full"}  mt={"2px"} bg={"blackAlpha.300"}   >
        {data?.map((item, i)=>(
            <Box key={item.id} alignItems="center" border={"3px solid gray"} ml={2} m={3} boxShadow={'md'} w={"300px"} borderColor="red.200" >
                <Image w={"full"}  h={"250px"} src={item.images} />
                <Text textAlign={"center"} fontWeight={"medium"} h="28px" overflow={"hidden"} >Name: {item.name}</Text>
                <Text textAlign={"center"} fontWeight={"small"} h="28px" overflow={"hidden"} >Desc: {item.description}</Text>
                <Text fontWeight={"medium"} p={3}>Price: {item.price}</Text>
                <Flex justifyContent={"space-between"}>
                <Link to={`/Admin/${item.id}/edit`} ><Button m={2} fontSize={"2xl"} bg={"green.500"}>Edit</Button></Link>
                <Button onClick={()=>handleDelete(item.id)} m={2} fontSize={"2xl"} bg={"red.500"}>Delete</Button>
                </Flex>
            </Box>
        ))}
    </Grid>
  )
}
