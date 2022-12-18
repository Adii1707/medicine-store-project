import { Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import FilterItem from "./FilterItem";
import data from "../../data/data.json";
import Discount from "../discount";
const Filtering = () => {
  const products = useSelector((store) => store.productdata.products);
  return (
    <div>
      <Stack>
        <Box fontSize="16px" fontWeight="600" >
          FILTERS
        </Box>
        <hr />
        <Box fontSize="16px" fontWeight="700" >
          BRANDS
        </Box>
        <Stack
          textAlign="center"
        border="1px solid gray"
          height="300px"
          overflow="auto"
        >
          <Box height="500px" >
            {data.map((items, i) => (
              <Box
                overflow="hidden"
                key={i}
               
                height="30px"
              >
                {" "}
                <Checkbox colorScheme="red" mt="10px"></Checkbox>
                <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                  {items.name}
                </label>
              </Box>
            ))}
          </Box>
        </Stack><br/>
        <Discount/>
      </Stack>
    </div>
  );
};

// export default Filtering;
// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useSearchParams, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import data from "../../data/data.json"
// import { Box, Checkbox } from "@chakra-ui/react";
// import { filtergetdata, getdata } from "../../Redux/Product_Redux/action";
// const Filtering = () => {

//   const location = useLocation();

//   const dispatch = useDispatch();
//   const [search, setSearch] = useSearchParams();
//   let value = search.getAll("name");
//   const [category, setCategory] = useState(value || []);
//   console.log("i ma a category",category);
//   function handleChange(e) {
//     let newcategory = [...category];
//     if (newcategory.includes(e.target.value)) {
//       newcategory.splice(newcategory.indexOf(e.target.value), 1);
//     } else {
//       newcategory.push(e.target.value);
//     }
//     setCategory(newcategory);
//   }
//   useEffect(() => {
//     if(category){
//         let params = {};
//         params.name = category;
//   setSearch(params);
//     if(location){
//       const changedata={
//         params:{
//     category:search.getAll("name"),
//     }
//     }
//     console.log(changedata,"ooo");
//     dispatch(filtergetdata(changedata))
//     }
//         }
//   }, [category, location.search]);
//   return (
//     <Box border="1px solid blue" height="30vw" overflow="auto">
//       <h1 style={{ color: "blue" }}>SORTING</h1>
//       {data.map((items,i)=>(
//         <Box fontSize="12px"  overflowX="hidden" textDecoration="none solid rgb(33,33,33)" key={i} ><Checkbox onChange={handleChange} border="1px solid #979797" color="#212121" value={items.name} defaultChecked={value.includes(items.name)}>{items.name}</Checkbox></Box>
//       ))}
//     </Box>
//   );
// };

export default Filtering;
