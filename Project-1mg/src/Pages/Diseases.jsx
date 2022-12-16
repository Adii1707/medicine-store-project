import { Button, Grid, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiseasesCard } from "../Components/DiSeasesComponents/DiseasesCard";
import { getDiseasesData } from "../Redux/Diseases_Redux/action";


const Diseases = () => {
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
  let url="http://localhost:8080/diseasesProduct_A"
  useEffect(()=>{
       dispatch(getDiseasesData(url))
  },[])
  const handleAdd=(item)=>{
    if(item=="A"){
       //console.log(item)
      // console.log(diseasesData[1])
  //  diseasesData[1].length>0&&diseasesData[1].map((el,index)=>{
  //   return (<DiseasesCard key={index} el={el}/>)
  // })
  let url="http://localhost:8080/diseasesProduct_A"
  dispatch(getDiseasesData(url))
   
    }
    else if(item=="B"){
      let url="http://localhost:8080/diseasesProduct_B"
  dispatch(getDiseasesData(url))
    }
    else if(item=="C"){
      let url="http://localhost:8080/diseasesProduct_C"
  dispatch(getDiseasesData(url))
    }
  }
 // console.log(diseasesData)
 
  return (
    <div>
     
      <Stack
        spacing={2}
        direction="row"
        align="center"
        variant="outline"
        width="100%"
        margin="auto"
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
      <Grid templateColumns='repeat(3, 1fr)' gap={3} marginTop="30px">
  

   {diseasesData.length>0&&diseasesData.map((el,index)=>{
    return (<DiseasesCard key={index} id={index} el={el} />)
   })}
   </Grid>
    </div>
  );
};

export { Diseases };
