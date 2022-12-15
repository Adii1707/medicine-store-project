import { Box, Button, Flex, Grid, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletetask, getdata } from "../Redux/AdminRedux/action";



export const FetchData =  () => {
   const data = useSelector((store)=> store.Data);
   const dispatch = useDispatch();
// const [data, setData] = useState([]);
// const dispatch=useDispatch()
  
   useEffect(()=>{
   dispatch(getdata());
   },[])
  
    console.log(data);

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
    <Grid gap={6} templateColumns='repeat(4, 1fr)' ml={8}  mt={"20px"}   >
        {data.map((item, i)=>(
            <Box key={i} alignItems="center" border={"2px solid"} w={"300px"} borderColor="red.200" >
                <Image w={"full"} h={"250px"} src={item.images} />
                <Text textAlign={"center"} fontWeight={"medium"} >Title:{item.description}</Text>
                <Text fontWeight={"medium"} p={3}>Price: {item.price}</Text>
                <Flex justifyContent={"space-between"}>
                <Link to={`/edit:${i+1}`}><Button fontSize={"2xl"} bg={"green.500"}>Edit</Button></Link>
                <Button onClick={()=>handleDelete(i)} fontSize={"2xl"} bg={"red.500"}>Delete</Button>
                </Flex>
            </Box>
        ))}
    </Grid>
  )
}
