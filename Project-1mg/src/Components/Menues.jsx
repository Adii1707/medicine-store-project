import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

import {Link} from "react-router-dom";

import { ChevronDownIcon } from '@chakra-ui/icons'

const Menues = () => {
  return (
    <Box pt="11px" bgColor="white" >
      <Flex m="auto" w="95%"  justifyContent="space-around" >
        <Menu >
          <MenuButton rightIcon={<ChevronDownIcon />} fontSize="14px" _hover={{ color: "#FF6F61" }} >
            Health Resource Center 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link to={"/disease"} _hover={{ color: "#FF6F61" }} >All Diseases</Link>
            <Link to="/medicine" _hover={{ color: "#FF6F61" }}>All Medicines</Link>
            <Link _hover={{ color: "#FF6F61" }}>
              Medicines by Therapeutic Class
            </Link>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Vitamins & Nutrition
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Flex pr="20px" w="550px" justifyContent="space-between">
                <Grid pr="25px" rowGap="5px" h="300px" >
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Vitamins & Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Multivitamins</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Vitamins A-Z</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Mineral Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }} >Vitamin B12 & B Complex</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Nutritional Drinks</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Adult Daily Nutrition</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Kids Nutrition (2-15 Yrs)</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Women Nutrition</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Health Food & Drinks</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Green Tea & Herbal Tea</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Apple Cider Vinegar</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Healthy Snacks</Link>
                </Grid>
                <Grid  pl="25px" pr="25px" rowGap="5px" borderLeft="1px solid #E0E0E0">
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Protein Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Whey Protein</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Amino Acids</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Mass Gainers</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Workout Essential</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Fat Burners</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Omega & Fish Oil</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Fish Oil</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Cod Liver Oil</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Flax Seed Oil</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Immunity Boosters</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Chyawanprasha</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Vitamin C</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Herbal Teas</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Antioxidant Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Ayurvedic Supplements</Link>

                </Grid>
                <Grid pl="25px" rowGap="5px" h="280px" borderLeft="1px solid #E0E0E0" >
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Specialty Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Plant based Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Beauty Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Pre and Probiotics</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Glucosamine</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Collagen</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Antioxidants</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Biotin</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Weight Management</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Weight Management Herbs</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Meal Replacements</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Weight Gain</Link>
                </Grid>
            </Flex>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Diabetes 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Flex w="420px" pr="20px" justifyContent="space-between" >
                <Grid pr="25px" rowGap="5px" h="200px" >
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Diabetes Monitoring</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Blood Glucose Monitors</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Test Strips & Lancets</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Syringes & Pens</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Sugar Free</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Diabetic Medicines</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Vitamins, Minerals & Antioxidants</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Homeopathy Medicines</Link>
                </Grid>
                <Grid pl="25px" rowGap="5px" h="110px" borderLeft="1px solid #E0E0E0">
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Sugar Substitutes</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Diabetic Diet</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Juices & Vinegars</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Diabetic Nutrition Supplements</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Diabetic Foot Health</Link>
                </Grid>
            </Flex>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Healthcare Devices 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Flex pr="20px" w="550px" justifyContent="space-between">
                <Grid pr="25px" rowGap="5px" h="350px" >
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Top brands in Healthcare Devices</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Dr. Morepen Devices</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Accu-chek</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >OneTouch</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Omron</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Contour</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >Dr Trust</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >BP Monitors</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Oxygen Concentrators & Cans</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Thermometers</Link>
                    <Link _hover={{ color: "#FF6F61" }}  >IR Thermometers</Link>
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Weighing Scales</Link>
                </Grid>
                <Grid pl="25px" pr="25px" rowGap="5px" h="500px" borderLeft="1px solid #E0E0E0" >
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Masks (N95, Surgical and more)</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Face Shield</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Surgical Masks</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >N95 Masks</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Nebulizers & Vaporizers</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Oximeters & Pedometers</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Vital Signs Monitors & Wearables</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Body Massager</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Diabetes Monitors</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Mobility Equipments</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Exercise Equipments</Link> 
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Doctor's Corner</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Stethoscopes</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Tapes & Bandages</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Clinical Diagnostic Equipments</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Dressings & Wound Care</Link> 
                </Grid>
                <Grid pl="25px" rowGap="5px" h="300px" borderLeft="1px solid #E0E0E0"  >
                    <Link _hover={{ color: "#FF6F61" }} fontWeight="bold" >Supports & Braces</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Neck & Shoulder Support</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Knee & Leg Support</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Back & Abdomen Support</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Ankle & Foot Support</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Hand & Wrist Braces</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Arm & Elbow Support</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Cervical Pillows</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Compression support & sleeves</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Heel support</Link> 
                    <Link _hover={{ color: "#FF6F61" }}  >Crepe Bandage</Link> 
                </Grid>
            </Flex>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Personal Care 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link to="/disease" _hover={{ color: "#FF6F61" }}>All Diseases</Link>
            <Link to="/medicine" _hover={{ color: "#FF6F61" }}>All Medicines</Link>
            <Link _hover={{ color: "#FF6F61" }}>
              Medicines by Therapeutic Class
            </Link>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Health Conditions 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link  _hover={{ color: "#FF6F61" }}>All Diseases</Link>
            <Link _hover={{ color: "#FF6F61" }}>All Medicines</Link>
            <Link _hover={{ color: "#FF6F61" }}>
              Medicines by Therapeutic Class
            </Link>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Ayurveda Products 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link to="/disease" _hover={{ color: "#FF6F61" }}>All Diseases</Link>
            <Link to="/medicine" _hover={{ color: "#FF6F61" }}>All Medicines</Link>
            <Link _hover={{ color: "#FF6F61" }}>
              Medicines by Therapeutic Class
            </Link>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Homeopathy 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link to="/disease" _hover={{ color: "#FF6F61" }}>All Diseases</Link>
            <Link to="/medicine" _hover={{ color: "#FF6F61" }}>All Medicines</Link>
            <Link _hover={{ color: "#FF6F61" }}>
              Medicines by Therapeutic Class
            </Link>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton fontSize="14px" _hover={{ color: "#FF6F61" }}>
            Featured 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link to="/disease"  _hover={{ color: "#FF6F61" }} >All Diseases</Link>
            <Link to="/medicine" _hover={{ color: "#FF6F61" }}>All Medicines</Link>
            <Link _hover={{ color: "#FF6F61" }}>
              Medicines by Therapeutic Class
            </Link>
          </MenuList>
        </Menu>
      </Flex>
      <Menu >
          <MenuButton mt="11px" rightIcon={<ChevronDownIcon />} fontSize="14px" _hover={{ color: "#FF6F61" }} >
            Covid Essentials 
            <ChevronDownIcon />
          </MenuButton>
          <MenuList
            fontSize="12px"
            fontWeight="bold"
            display="grid"
            textAlign="left"
            pl="20px"
            borderRadius="5px"
            rowGap="10px"
          >
            <Link _hover={{ color: "#FF6F61" }}>Covid-19 Self test kits</Link>
            <Link _hover={{ color: "#FF6F61" }}>Oxygen Cans & Concentrators</Link>
            <Link _hover={{ color: "#FF6F61" }}>Masks</Link>
            <Link _hover={{ color: "#FF6F61" }}>Sanitizers & Handwash Products</Link>
            <Link _hover={{ color: "#FF6F61" }}>Support Your Immunity</Link>
            <Link _hover={{ color: "#FF6F61" }}>Thermometer</Link>
            <Link _hover={{ color: "#FF6F61" }}>Chyawanprash</Link>
          </MenuList>
        </Menu>
    </Box>
  );
};

export default Menues;
