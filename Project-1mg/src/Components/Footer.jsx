import { Box, Heading, Grid, Input, Button, Text,VStack,HStack,Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <hr />
      <Box width="80%" margin="auto" height="150px" paddingBottom="0px">
        <Heading as="h2" mt="1.5rem" mb="1rem" fontSize="2xl" fontWeight="450">
          INDIA’S LARGEST HEALTHCARE PLATFORM
        </Heading>

        <Box>
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            <Box>
              <Heading as="h1">260m+</Heading>
              <Text fontSize="md"> Visitors</Text>
            </Box>
            <Box>
             
              <Heading as="h1">31m+</Heading>
              <Text fontSize="md"> Orders Delivered</Text>
            </Box>
            <Box>
             
              <Heading as="h1">1800+</Heading>
              <Text fontSize="md">Cities </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
      <hr style={{ width: "85%", margin: "auto" }} />
      <Box
        
        width="60%"
        margin="auto"
         paddingRight="40px"
         paddingLeft="40px"
        height="90px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          
          templateColumns="repeat(2, 1fr)"
          gap={0}
        
          alignItems="center"
        >
          <Heading fontSize="19.1px" fontWeight="450" as="h3">
            Get the link to download App
          </Heading>
          <Box
            
            width="450px"
            margin="auto"
            marginRight="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Input
              htmlSize={35}
              width="auto"
              variant="filled"
              placeholder="Enter Phone Number"
              size="md"
            />
            <Button
              color="white"
              backgroundColor="#ff6f61"
              width="7rem"
              fontSize="12px"
              _hover={{ bg: "green.300" }}
            >
             
              Send Link
            </Button>
          </Box>
        </Grid>
      </Box>
      <hr />
      <Box  display="flex" gap = "50px"  bgColor="#fffcf8"  width="100%" height="300px">
        
        <Box  marginTop="20px" marginLeft="25px"  width="70%" height="250px" pl={10} pr={20} >
          <Grid templateColumns="repeat(4, 1fr)"
          gap={10}   >
          
          <VStack cursor="pointer" align={'flex-start'}   spacing={1}>
            <Heading  mb="1rem" fontSize="16px" fontWeight="400" as="h3">
              Know Us

            </Heading> 
          <Text color="gray.600" fontSize="12px" > About Us</Text>
          <Text color="gray.600" fontSize="12px" > Contact Us </Text>
          <Text color="gray.600" fontSize="12px" > Press Coverage </Text>
          <Text color="gray.600" fontSize="12px" > Careers </Text>
          <Text color="gray.600" fontSize="12px" > Business Partnership </Text>
         
          <Text color="gray.600" fontSize="12px" > Become a Health Partner </Text>
          <Text color="gray.600" fontSize="12px" > Corporate Governance</Text>
          </VStack>

          <VStack cursor="pointer" align={'flex-start'}   spacing={1}>
            <Heading  mb="1rem" fontSize="16px" fontWeight="400" as="h3">
            Our Policies

            </Heading> 
          <Text color="gray.600" fontSize="12px" > Privacy Policy</Text>
          <Text color="gray.600" fontSize="12px" > Term and Conditions</Text>
          <Text color="gray.600" fontSize="12px" > Editorial Policy </Text>
          <Text color="gray.600" fontSize="12px" > Return Policy </Text>
          <Text color="gray.600" fontSize="12px" > IP Policy </Text>
          <Text color="gray.600" fontSize="12px" >Grievance Redressal Policy </Text>
         
          <Text color="gray.600" fontSize="12px" >Fake Jobs and Fraud Disclaimer</Text>

          </VStack>


          <VStack cursor="pointer" align={'flex-start'}   spacing={1}>
            <Heading mb="1rem" fontSize="16px" fontWeight="400" as="h3">
            Our Services

            </Heading> 
          <Text color="gray.600" fontSize="12px" >Order Medicines</Text>
          <Text color="gray.600" fontSize="12px" >Book Lab Tests</Text>
          <Text color="gray.600"  fontSize="12px" > Consult a Doctor </Text>
          <Text color="gray.600" fontSize="12px" >Ayurveda Articles </Text>
          <Text color="gray.600" fontSize="12px" >Hindi Articles</Text>
          <Text color="gray.600" fontSize="12px" >Care Plan </Text>
         
        

          </VStack>

          <VStack cursor="pointer" >
          <Heading mb="1rem" fontSize="16px" fontWeight="400" as="h3">
            Connect </Heading> 
          <Text color="gray.600" fontSize="13px" fontWeight="semibold" >Social Links</Text>

          <HStack cursor="pointer"  spacing={2} >
          <Image  boxSize='25px'
    objectFit='cover' src="https://onemg.gumlet.io/vqpr5zx9ofpsyafjwwin.svg" alt="fb"/>
          <Image  boxSize='25px'
    objectFit='cover' src="https://onemg.gumlet.io/wwynoy59i3iakt8te5xl.svg"/>
          <Image  boxSize='25px'
    objectFit='cover' src="https://onemg.gumlet.io/cwrpdmlzckwzvv9e1gjv.svg"/>
          <Image  boxSize='25px'
    objectFit='cover' src="https://onemg.gumlet.io/tywtfwyzxb8ujnqmbuau.svg"/>
          <Image  boxSize='25px'
    objectFit='cover' src="https://onemg.gumlet.io/hqfglkzkfxaxaypniixn.svg"/>
          <Image  boxSize='25px'
    objectFit='cover' src="https://onemg.gumlet.io/ny7nk9wxxlcxpeh1jbgg.svg"/>
          </HStack>
        

           <Text color="gray.500" fontSize="15px"  >Want daily dose of health? </Text>
           <Button
              color="white"
              backgroundColor="#ff6f61"
              cursor="pointer"
              width="6rem"
              fontSize="15px"
              _hover={{ bg: "green.300" }}
            >
             
             SIGN UP
            </Button>
          </VStack>
          
            

          </Grid>
        </Box>
        
        
        
        
        
        <Box  width="20%" height="250px" >
          <VStack cursor="pointer" spacing={2} >
            <Heading mt={2}  fontWeight="700" fontSize="15px"  as="h3">
             Download App
            </Heading>
            <Box>
            <Image  mt={-8} boxSize='120px'
     src="https://cdn.iconscout.com/icon/free/png-128/google-168-189832.png" / >
            <Image mt="-4rem" boxSize='120px'
     src="https://cdn.iconscout.com/icon/free/png-128/download-166-225381.png" />
            </Box>
            
          </VStack>
        </Box>

      </Box>
      <hr />
    </>
  );
};

export default Footer;
