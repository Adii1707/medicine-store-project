import React, { useEffect, useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Flex,
  Input,
  Link,
  Button,
  Box
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { getOtpSuccess } from '../Redux/HomeProducts/action';

function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((store)=>store.Homereducer.isAuth);
  console.log(isAuth)

  const handleSignup = () => {
    if(number){
      setInterval(()=>{
        dispatch(getOtpSuccess(true))
      },2000)
    }
  }

  return (
    <>
      <Link ref={btnRef} fontSize="14px" colorScheme='teal' onClick={onOpen}>
        SignUp
      </Link>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Text fontSize="30px" fontWeight="bold" mb="20px">Sign Up</Text>
            <Text fontSize="14px" >Please enter your Mobile number to receive One Time Password (OTP)</Text>
            <br />

            <Box>
              <Input value={number} type="number" onChange={(e) => setNumber(e.target.value)} placeholder='Enter Mobile Number' border="none" borderBottom="2px solid red" mt="50px" mb="40px" ></Input>
              <Flex>
                <input type="checkbox"  ></input>
                <Text ml="10px" fontSize="14px" >Are you a healthcare professional?</Text>
              </Flex>
              <Button
                ml="10px"
                w="250px"
                mt="60px"
                color="white"
                fontSize="20px"
                bgColor="#FF6F61"
                onClick={handleSignup}
              >
                Continue
              </Button>
              <Flex ml="50px" mt="60px" >
                <Text>Have an account? </Text>
                <Link color="#FF6F61" ml="5px" fontWeight="bold" >Login</Link>
              </Flex>
              <Text mt="10px" fontSize="14px" >By signing up, you agree to our
                Terms and Conditions & Privacy Policy</Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SignUp;