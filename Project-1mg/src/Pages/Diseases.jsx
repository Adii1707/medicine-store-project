import { Button, Grid, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiseasesCard } from "../Components/DiSeasesComponents/DiseasesCard";
import Menues from "../Components/Menues";
import Navbar from "../Components/Navbar";
import { getDiseasesData } from "../Redux/Diseases_Redux/action";


const Diseases = () => {
  const dispatch=useDispatch()
  const diseasesData=useSelector((store)=>{
   return store.DiseaseReducer.diseasesData
  })
  
  let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let url="https://json-mock-cp-cl1n.onrender.com/diseasesProduct_A"
  useEffect(()=>{
       dispatch(getDiseasesData(url))
  },[])
  const handleAdd=(item)=>{
    if(item=="A"){
     
  let url="https://json-mock-cp-cl1n.onrender.com/diseasesProduct_A"
  dispatch(getDiseasesData(url))
   
    }
    else if(item=="B"){
      let url="https://json-mock-cp-cl1n.onrender.com/diseasesProduct_B"
  dispatch(getDiseasesData(url))
    }
    else if(item=="C"){
      let url="https://json-mock-cp-cl1n.onrender.com/diseasesProduct_C"
  dispatch(getDiseasesData(url))
    }
  }
 // console.log(diseasesData)
 
  return (
    <div>
     <Navbar />
     <Menues />
      <Stack
        spacing={2}
        direction="row"
        align="center"
        variant="outline"
        width="100%"
        margin="auto"
        marginLeft="40px"
        marginTop="15px"
      >
        {arr.length > 0 &&
          arr.map((item,index) => {
            return (
              <Button onClick={()=>handleAdd(item)}
              key={index}
                colorScheme="red"
                size="xs"
                width="40px"
                height="40px"
                fontSize="20px"
                variant="outline"
                _hover={{ bg: "red", textColor: "white", variant: "solid" }}
              >
                {item}
              </Button>
            );
          })}
      </Stack>
      <Grid templateColumns={{sm:"repeat(1, 1fr)",md:'repeat(2, 1fr)',lg:'repeat(3, 1fr)'}} gap={3} marginTop="30px">
  

   {diseasesData.length>0&&diseasesData.map((el,index)=>{

    return (<DiseasesCard key={index} id={index} el={el} />)
    
   })}
   </Grid>
    </div>
  );
};

export { Diseases };
