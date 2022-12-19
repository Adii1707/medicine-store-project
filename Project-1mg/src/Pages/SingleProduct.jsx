import {
  Box,
  Button,
  Image,
  Radio,
  RadioGroup,
  Select,
  Text,
  Stack,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { BiRupee } from "react-icons/bi";
import Styles from "../Allcss/Product.module.css";
import { filtergetdata } from "../Redux/Product_Redux/action";
import Navbar from "../Components/Navbar";
import Menues from "../Components/Menues";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const [store, setStore] = useState({});
  const [count, setCount] = useState(0);

  const { user_id } = useParams();
  localStorage.setItem("flag", false);
  function Addtocart(e) {
    dispatch(filtergetdata());
  }

  useEffect(() => {
    axios
      .get(`https://json-mock-cp-cl1n.onrender.com/products/${user_id}`)
      .then((res) => {
        setStore(res.data);
      })
      .catch((err) => {
        alert("error");
      });
  }, []);

  return (
    <div>
      <>
      <Navbar />
     <Menues />
        <Box
          padding="12px 100px 10px"
          display="flex"
          fontSize="16px"
          backgroundColor="white"
          color="#666"
          margin="0 0 20px"
        >
          <Box
            // border="1px solid red"
            paddingLeft="15px"
            paddingRight="15px"
            width=" 33.33333333%"
          >
            <Image
              height="348"
              padding="0"
              width="83%"
              src={store.images}
              alt="error"
            />
          </Box>
          <Stack width="33%" textAlign="left">
            <Box>
              <h1
                style={{
                  fontSize: "23px",
                  fontWeight: "700",
                  color: "#212121",
                }}
              >
                {store.name}
              </h1>
            </Box>
            <Box
              fontSize="12px"
              color="#ff6f61"
              textDecor="none"
              paddingBottom="5px"
            >
              {store.description}
            </Box>
            <Box fontSize="12px" display="flex">
              <Box
                backgroundColor="#1AAB2A"
                borderRadius="2px"
                display="inline-block"
                padding="1px 5px"
                position="relative"
              >
                <Box
                  display="flex"
                  gap="5px"
                  fontSize="14px"
                  justifyContent="center"
                  alignItems="center"
                  padding="2px 4px 2px 4px"
                  borderRadius="5px"
                  color="white"
                >
                  {store.rating}
                  <BiStar />
                </Box>
              </Box>
              <Box fontSize="14px" marginLeft="10px" color="#ff6f61">
                {store.maxrating} & 720 Reviews
              </Box>
            </Box>
            <Box
              display="flex"
              width="30%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Image
                src="https://onemg.gumlet.io/marketing/qubet60eokwth4ki5btj.png"
                width="34px"
              />
              <Text fontSize="md" color="#ff6f61">
                in Scaple
              </Text>
            </Box>
            <Box>
              <h1 style={{ color: "black", marginTop: "10px" }}>
                Product highlights
              </h1>
              <UnorderedList
                color="#212121"
                fontWeight="400"
                fontSize="14px"
                wordBreak="break-word"
                mt="10px"
              >
                <ListItem>
                  Used in the treatment of dandruff related issues
                </ListItem>
                <ListItem>
                  Helps to prevent itching, flaking and scaling
                </ListItem>
                <ListItem>
                  Useful in preventing hair fall due to dandruff
                </ListItem>
                <ListItem>
                  Contains conditioning base that keeps the hair soft
                </ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <Box
            boxShadow=" rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
            paddingLeft="15px"
            paddingRight="15px"
            width="33%"
          >
            <h1
              style={{
                fontWeight: "700",
                backgroundColor: "#edf9ee",
                textAlign: "left",
                padding: "6px 20px 6px 20px",
                width: "100%",
              }}
            >
              8083 people bought this recently
            </h1>
            <RadioGroup defaultValue="2" marginTop="20px">
              <Stack spacing={3} direction="column">
                <Radio colorScheme="red" value="1" size="lg">
                  <span className={Styles.price1}>
                    <BiRupee />
                    {store.realprice}{" "}
                    <Box
                      className={Styles.price}
                      marginLeft="10px"
                      fontSize="15px"
                    >
                      {store.price}
                    </Box>
                    <Box className={Styles.discount1} marginLeft="10px">
                      {store.discount}
                    </Box>
                  </span>
                </Radio>
                <Radio colorScheme="red" value="2" size="lg">
                  <span className={Styles.price1}>
                    {" "}
                    <BiRupee />
                    {store.realprice}{" "}
                    <Box marginRight="40px" fontSize="17px" color="grey">
                      + free shipping and 5% Extra cashback with
                    </Box>
                  </span>
                </Radio>
              </Stack>
            </RadioGroup>
            <Box fontSize="16px" mt="10px" color="grey" textAlign="left">
              Inclusive of all taxes
            </Box>
            <Box display="flex" b>
              <Select width="40%" mt="8px" height="25px" fontSize="15px">
                <option value="option1">1 Bottle</option>
                <option value="option2">2 Bottle</option>
                <option value="option3">3 Bottle</option>
                <option value="option4">4 Bottle</option>
                <option value="option5">5 Bottle</option>
              </Select>
              <Box color="black" margin="5px 0px 0px 15px">
                75 ml Shampoo
              </Box>
            </Box>
            <Button
              backgroundColor="#ff6f61"
              color="#fff"
              fontWeight="700"
              borderRadius="4px"
              textAlign="center"
              marginTop="30px"
              width="100%"
              float="right"
              onClick={() => {
                setCount(count + 1);
                Addtocart();
              }}
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
          <Image display="flex" src="https://onemg.gumlet.io/1da42959-d90d-47f7-b229-bba0eb4cefe1_1667973859.png?w=337&h=77&format=auto" />
        <Box position="relative">
          {" "}
          <AiOutlineShoppingCart />
        </Box>
        <Box position="absolute">{count}</Box>
      </>
    </div>
  );
};

export default SingleProduct;
