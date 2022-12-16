import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../Redux/Product_Redux/action";
import Styles from "../Allcss/Product.module.css";
import cx from "classnames";
import { Center } from "@chakra-ui/react";
import Product_genericItems from "./Product_genericItems";
import { SimpleGrid } from "@chakra-ui/react";
const Products_generic = ({ url, productlist, topproducts }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productdata.products);
  const productall=useSelector((store) => store.productdata);
const loading=useSelector((store) => store.productdata.productloading);
  
  useEffect(() => {
    dispatch(getdata(url));
  }, []);
  function handleClick() {
    dispatch(getdata("https://json-mock-cp-cl1n.onrender.com/top-deals"));
  }
  // if(productall.productloading){
  //   return <h1>...Loading</h1>
  // }
  if(productall.producterror){
    return <h1>...Error</h1>
  }
  return (
    <>
      <Box height="670vw" border="1px solid black" className={Styles.main}>
        <Box className={cx(Styles.topdeals)}>
          <Box className={Styles.text}>Top Deals</Box>
          <Box>
            <button className={Styles.button} onClick={() => handleClick()}>
              SEE ALL
            </button>
          </Box>
        </Box>
        <Center>
          <Box className={cx(Styles.parent, Styles.all)}>
            <Box className={Styles.innerdiv}>
              <Box className={Styles.divs}>
                {products.length > 0 &&
                  products.map((items, i) => {
                    return (
                      <Product_genericItems
                        topproducts={topproducts}
                        key={i}
                        images={items.images}
                        index={i}
                        name={items.name}
                        description={items.description}
                        rating={items.rating}
                        maxrating={items.maxrating}
                        price={items.price}
                        discount={items.discount}
                        realprice={items.realprice}
                        productlist={productlist}
                        widthdata={true}
                        isLoaded={loading}
                      />
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Center>

        <Center>
          <Box className={cx(Styles.parent, Styles.boxshadow)} height="600vw">
            <Box className={Styles.innerdiv}>
              <SimpleGrid columns={[2, null, 4]} spacing="40px">
                {products.length > 0 &&
                  products.map((items, i) => {
                    return (
                      <Product_genericItems
                        topproducts={topproducts}
                        key={i}
                        images={items.images}
                        index={i}
                        name={items.name}
                        description={items.description}
                        rating={items.rating}
                        maxrating={items.maxrating}
                        price={items.price}
                        discount={items.discount}
                        realprice={items.realprice}
                        productlist={60}
                      />
                    );
                  })}
              </SimpleGrid>
            </Box>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Products_generic;
