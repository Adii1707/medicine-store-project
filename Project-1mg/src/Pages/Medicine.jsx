import { Button, Grid, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiseasesCard } from "../Components/DiSeasesComponents/DiseasesCard";
import { MedicineCard } from "../Components/DiSeasesComponents/MedicineCard";
import { getDiseasesData } from "../Redux/Diseases_Redux/action";


const Medicine = () => {
  const dispatch=useDispatch()
  const diseasesData=useSelector((store)=>{
   return store.DiseasesReducer.diseasesData
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
  let url="https://json-mock-cp-cl1n.onrender.com/medicineData_A"
  useEffect(()=>{
       dispatch(getDiseasesData(url))
  },[])
  const handleAdd=(item)=>{
    if(item=="A"){
     
  let url="https://json-mock-cp-cl1n.onrender.com/medicineData_A"
  dispatch(getDiseasesData(url))
   
    }
    else if(item=="B"){
      let url="https://json-mock-cp-cl1n.onrender.com/medicineData_B"
  dispatch(getDiseasesData(url))
    }
    else if(item=="C"){
      let url="https://json-mock-cp-cl1n.onrender.com/medicineData_C"
  dispatch(getDiseasesData(url))
    }
 }
  console.log(diseasesData)
 
  return (
    <div>
     
      <Stack
        spacing={2}
        direction="row"
        align="center"
        variant="outline"
        width="100%"
        margin="auto"
        marginTop="15px"
        marginLeft="40px"
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
    return (<MedicineCard key={index} id={index} el={el} />)
   })}
   </Grid>
    </div>
  );
};

export { Medicine };
