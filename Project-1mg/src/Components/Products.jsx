import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/HomeProducts/action";
import {
  ChakraProvider,
  Box,
  Image,
  Heading,
  Button,
  Text,
  Flex,
  Link,
  VStack,
  Input,
  Code,
  Grid,
  SimpleGrid,
  theme,
} from "@chakra-ui/react";

const Products = () => {
  const data = useSelector((store) => store.Homereducer.data);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData());
    }
  }, []);

  return (
    <Box bgColor="white" >
      <SimpleGrid columns={[2, 4, 8]} spacing="40px">
        {data.length > 0 &&
          data.map((elem, index) => {
            return (
              elem.images && (
                <Box key={index} border="1px solid red">
                  <Image cursor="pointer" src={elem.images} />
                </Box>
              )
            );
          })}
      </SimpleGrid>
    </Box>
  );
};

export default Products;
