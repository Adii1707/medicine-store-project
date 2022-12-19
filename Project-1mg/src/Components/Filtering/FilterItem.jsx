import { Box, Checkbox } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { getdata } from "../../Redux/Product_Redux/action";
import { useDispatch } from "react-redux";
const FilterItem = ({ name, data }) => {
  const location=useLocation()
  const [params,setParams]=useSearchParams()
  const intial=params.getAll("name");
    const [value, setvalue] = useState(intial||[]);
  function handleChange(e) {
    const category = [...value];
  
    if (category.includes(e.target.value)) {
      category.splice(category.indexOf(e.target.value), 1);
    } else {
      category.push(e.target.value);
    }
    setvalue(category);
  }
  useEffect(()=>{
if(value){
  let params={}
  params.name=value
  console.log("i am params",params);
  setParams(params)
  if(location){
    const changedata={
      params:{
  category:params.getAll("category"),
  // _sort:sortBy&&"release_year",
  // _order:sortBy[0],
      }
  }
  console.log(changedata,"ooo");
  // dispatch(getdata(changedata))
  }
}
  },[value])
  return (
    <div>
      {data < 15 && (
        <Box overflow="hidden" border="1px solid red" height="30px">
          <Checkbox
            colorScheme="red"
            mt="10px"
            value={name}
            onChange={handleChange}
            defaultChecked={value.includes(name)}
          ></Checkbox>
          <label style={{ fontSize: "12px", marginLeft: "15px" }}>{name}</label>
        </Box>
      )}
    </div>
  );
};

export default React.memo(FilterItem);
