import React from "react";
import { thunderIcon, locationICon, cartIcon, navLinks } from "../Data2/Data";
import logo from "../Data2/Logo/Logo.jpeg";
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
  theme,
} from "@chakra-ui/react";
import SignUp from "./Signup";
import Login from "./Login";



export const Navbar = () => {
  return (
    <Box fontFamily="Clear Sans, Helvetica Neue, Helvetica, Arial, sans-serif" bgColor="white" w={["480px", "600px", "1000px", "100%"]}  >
      <Flex
        w={["480px", "600px", "1000px", "100%"]}
        h="47px"
        border="1px solid #E0E0E0"
        borderTop="none"
        // justifyContent="space-around"
        alignItems="center"
      >
        <Box w="10%" ml="15px">
          <Image w="35px" h="35px" ml="20px" src={logo} alt="Tata" />
        </Box>

        <Flex w="55%" h="80%" justifyContent="space-around" alignItems="center">
          {navLinks.map((elem, index) => {
            return (
              <Flex key={index} h="20px" alignItems="center">
                <Link fontSize={["8px","8px","12px","16px"]} fontWeight="bold" _hover={{ color: "#FF6F61" }}>
                 {elem.title}
                </Link>
              </Flex>
            )
          })}
        </Flex>

        <Flex w="25%" ml="60px">
          <Flex h="20px" alignItems="center">
            <Login/> 
            <Text ml="7px" >|</Text>
          </Flex>
          <Flex h="20px" alignItems="center" ml="5px">
            <SignUp/>
          </Flex>
          <Flex h="20px" alignItems="center" ml="23px">
            <Link fontSize="14px">Offers</Link>
          </Flex>
          <Flex h="20px" alignItems="center" ml="30px">
            <Link fontSize="14px">
              <Image w="24px" src={cartIcon} />
            </Link>
          </Flex>
          <Flex h="20px" alignItems="center" ml="45px">
            <Link fontSize="14px">Need Help?</Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        w={["480px", "600px", "1000px", "100%"]}
        h="47px"
        border="1px solid #E0E0E0"
        borderTop="none"
        // justifyContent="space-around"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Flex
            alignItems="center"
            w={["100px", "100px", "150px","200px"]}
            h="34px"
            bgColor="#F1F4F6"
            ml="53px"
            border="none"
          >
            <Box m="0px 0px 0px 10px">
              <Image w="16px" h="17px" src={locationICon} />
            </Box>
            <Input
              w={["70px", "70px", "110px", "140px" ]}
              h="25px"
              pl="5px"
              fontSize="14px"
              lineHeight="14px"
              textAlign=""
              border="none"
            />
            <Box ml="5px">
              <Image
                w="14px"
                src="https://img.1mg.com/images/locator-icon.svg"
              />
            </Box>
          </Flex>
          <Flex
            alignItems="center"
            w={["250px", "250px", "400px", "585px"]}
            h="34px"
            bgColor="#F1F4F6"
            ml="1px"
            border="none"
            pr="5px"
          >
            <Input
              w="550px"
              h="25px"
              pl="15px"
              fontSize="13px"
              lineHeight="21px"
              textAlign=""
              border="none"
              placeholder="Search for Medicines and Health Product"
            />
            <Box ml="20px">
              <Image
                w="18px"
                src="https://img.icons8.com/fluency-systems-filled/512/search.png"
              />
            </Box>
          </Flex>
          <Flex ml="68px">
            <Image src={thunderIcon} />
            <Text fontSize="13px" mt="8px" lineHeight="20px">
              QUICK BUY! Get 25% off on medicines*
            </Text>
            <Button
              ml="20px"
              w="140px"
              h="35px"
              bgColor="#FF6F61"
              color="white"
              fontSize="16px"
            >
              Quick order
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
