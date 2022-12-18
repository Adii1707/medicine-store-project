import { Box, Center, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Styles from "../Allcss/Product.module.css";
import { BiRupee } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
const Product_genericItems = ({
  images,
  name,
  description,
  rating,
  maxrating,
  price,
  index,
  productlist,
  discount,
  realprice,

  id,
}) => {
  const navigate = useNavigate();
  function handleClick(e) {
    let obj = {
      name: name,
      image: images,
      description: description,
      rating: rating,
      price: price,
      realprice: realprice,
      maxrating: maxrating,
    };

    navigate(`/singleproduct/${id}`);
  }

  return (
    <>
      <div>
        {index < productlist - 1 && (
          <Box
            className={Styles.divs}
            backgroundColor="white"
            onClick={handleClick}
          >
            <Box className={Styles.imagediv}>
              <Image src={images} className={Styles.images} />
            </Box>
            <Box height="27px" width="170px"></Box>
            <Box className={Styles.name}>{name}</Box>
            <Box className={Styles.description}>{description}</Box>
            <Box className={Styles.rating}>
              <Box className={Styles.rating1}>
                {rating}
                <FaRegStar />
              </Box>
              <Box className={Styles.rating2}>{maxrating}</Box>
            </Box>
            <Box className={Styles.pricediv}>
              <Box className={Styles.price}>{price}</Box>
              <Box className={Styles.off}>{discount}</Box>
            </Box>
            <Box className={Styles.flex}>
              <Box fontSize="16px" display="flex">
                <span style={{ marginTop: "4px" }}>
                  <BiRupee />
                </span>
                {realprice}
              </Box>
              <button className={Styles.btn}>ADD</button>
            </Box>
          </Box>
        )}
      </div>
    </>
  );
};

export default Product_genericItems;
