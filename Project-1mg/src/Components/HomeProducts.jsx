import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/HomeProducts/action";
import { Box } from "@chakra-ui/react";
import { HomeData } from "../Data/Data";
import SliderComp from "./Slider";

const url = "https://json-mock-cp-cl1n.onrender.com/Omega"

const HomeProducts = () => {
  const data = useSelector((store) => store.data);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData(url));
    }
  }, [data.length]);

  return (
    <Box>
      <SliderComp data={HomeData.healthConcerns} heading="Shop by health concerns" />
      <SliderComp data={HomeData.FeaturedBrands} heading="Featured brands" />
      <SliderComp data={data} heading="Omega & fish oil" />
    </Box>
  );
};

export default HomeProducts;
