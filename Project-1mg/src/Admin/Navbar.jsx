import { Button, Image } from "@chakra-ui/react";
import React from "react";
// import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
export const Navbar = () => {
//   const total = useSelector((store)=> store.tasks.length);
//   const data = useSelector((store)=> store.tasks);
  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    > 
    <Image />
    <div style={{ flex: "1" }}><Link to="/Admin">Home</Link></div>
      <div style={{ flex: "1" }}>Medicne Store</div>
      <div style={{ flex: "1" }}>
        <div>Total Products</div>
        <div >{}</div>
      </div>
      <div style={{ display: "flex" }}>
        <Link to="/add">
        <Button >Add Products</Button>
        </Link>
      </div>
    </div>
  );
};
