import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../Redux/Product_Redux/action";
import Styles from "../Allcss/Product.module.css";
import Product_genericItems from "./Product_genericItems";
const Products_generic = ({ url }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productdata.products);
  console.log(products, "pp");
  let count = 0;

  console.log("i am products", count);
  useEffect(() => {
    dispatch(getdata(url));
  }, []);
  return (
    <div className={Styles.parent}>
      <Box className={Styles.category} >
        <SimpleGrid columns={[2, null, 4]}  >
          {products.length > 0 &&
              products.map(
                (items, i) =>
                  i < 4 && <Product_genericItems key={i} {...items} />
              )}
          
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Products_generic;
