import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
export const Navbar = () => {
   const total = localStorage.getItem("Total");
//   const data = useSelector((store)=> store.tasks);
console.log(total)
  return (
    <Box  bg={"teal.400"} 
      style={{
        // border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    > 
    <Image />
    <Box mt={"5px"} style={{ flex: "1" }}><Link to="/Admin" ><Text fontWeight={"medium"} >Home</Text></Link></Box>
      <Box mt={"5px"} style={{ flex: "1" }} fontWeight={"medium"} ><Link to="/" >Medicne Store</Link></Box>
      <Box style={{ flex: "1" }}>
        <Box mt={"5px"}><Text fontWeight={"medium"} >Total Products</Text></Box>
        <Box color={"white"} fontWeight={"bold"}>{total}</Box>
      </Box>
      <Box style={{ display: "flex" }}>
        <Link to="/add">
        <Button mt={"5px"} >Add Products</Button>
        </Link>
      </Box>
    </Box>
  );
};
