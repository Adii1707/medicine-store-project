import { Box, Image, Skeleton } from "@chakra-ui/react";
import React from "react";
import Styles from "../Allcss/Product.module.css";
import cx from "classnames";
import { AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
const Product_genericItems = ({
  images,
  name,
  description,
  rating,
  maxrating,
  price,
  discount,
  realprice,
  index,
  productlist,
  widthdata,
  loading
}) => {
  return (
    index < productlist && (
      
     <Box
        className={Styles.innerdivs}
        width={widthdata === true ? "16%" : "null"}
        backgroundColor="white"
      >
        {/* <Skeleton loading> */}
        <Box className={Styles.image}>
          {<Image src={images} alt="no image" />}
        </Box>
        <Box height="27px"></Box>
        <Box className={Styles.name}>{name}</Box>
        <Box className={Styles.description}>{description}</Box>
        <Box className={Styles.rating}>
          <Box className={Styles.rating1}>
            {rating}{" "}
            <span
              style={{ fontSize: "15px", color: "white", marginLeft: "8px" }}
            >
              <AiOutlineStar />
            </span>{" "}
          </Box>
          <Box className={Styles.rating2}>{maxrating}</Box>
        </Box>
        <Box>
          <Box className={cx(Styles.price)}>
            <Box>{price}</Box>
          </Box>
          <Box fontSize="11px" display="inline" className={Styles.off}>
            {discount}
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box className={Styles.realprice}>
            <Box display="flex">
              <span style={{ fontSize: "18px", marginTop: "2px" }}>
                <BiRupee />
              </span>
              {realprice}
            </Box>
          </Box>
          <button className={Styles.button}>ADD</button>
        </Box>
        {/* </Skeleton> */}
        </Box>

      )
      );
};

export default Product_genericItems;
