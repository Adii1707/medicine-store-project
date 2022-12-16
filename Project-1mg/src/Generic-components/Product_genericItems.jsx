import { Box, Center, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Styles from "../Allcss/Product.module.css";
import cx from "classnames";
const Product_genericItems = ({
  images,
  name,
  description,
  rating,
  maxrating,
  price,
  discount,
  realprice,
}) => {
  return (
    <div>
      <Box
        style={{ height: "310px" }}
        className={cx(Styles.mainall)}
        border="1px solid black"
      >
        <Center>
          <Box float="left" height="50%" width="53.33333333%">
            <Center>
              <Image src={images} />
            </Center>
          </Box>
        </Center>
        <br />
        <br />
        <Box className={Styles.name}>{name}</Box>
        <Box className={cx(Styles.description, Styles.all)}>{description}</Box>
        <Box className={Styles.rating}>
          <Box className={Styles.rating1}>{rating}</Box>
          <Box className={Styles.rating2}>{maxrating}</Box>
        </Box>
        <Box>
          <Box className={cx(Styles.rating, Styles.cutprice)}>{price}</Box>
        </Box>
      </Box>
    </div>
  );
};

// export default Product_genericItems;
