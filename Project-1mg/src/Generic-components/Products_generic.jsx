import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getdata } from "../Redux/Product_Redux/action";
import Styles from "../Allcss/Product.module.css";
import cx from "classnames";
import { Center } from "@chakra-ui/react";
import Product_genericItems from "./Product_genericItems";
import Filtering from "../Components/Filtering/Filtering";

const Products_generic = ({ url, productlist, topproducts }) => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.productdata.products);
console.log("i am products",products);
  const productall = useSelector((store) => store.productdata);
  const loading = useSelector((store) => store.productdata.productloading);
  useEffect(() => {
    dispatch(getdata(url));
  }, []);
  function handleClick() {
    dispatch(getdata("https://json-mock-cp-cl1n.onrender.com/top-deals"));
  }
  if (productall.producterror) {
    return <h1>...Error</h1>;
  }
  return (
    <Box display="flex">
      <div
        style={{ width: "15%", textAlign: "left", paddingLeft: "10px" }}
        textAlign="left"
      >
        <Filtering />
      </div>
      {/* <Box backgroundColor="red" border="1px solid blue" width="85%" className={Styles.left}> */}
      <Box height="670vw" className={Styles.main}>
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
                      id={items.id}
                      widthdata={true}
                      isLoaded={loading}
                    />
                  );
                })}
            </Box>
          </Box>
        </Center>

        <Center>
          <Box className={cx(Styles.parent)} height="600vw">
            <Box width="100%">
              <SimpleGrid columns={[2, null, 4]} spacing="40px" width="100%">
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
                        id={items.id}
                      />
                    );
                  })}
              </SimpleGrid>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Products_generic;
