import React from "react";
import Products_generic from "../Generic-components/Products_generic";
import { SimpleGrid } from "@chakra-ui/react";
const AllProducts = () => {
  return (
    <div>
      <Products_generic productlist={100} />
    </div>
  );
};

export default AllProducts;
