import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../Redux/HomeProducts/action";
import { Box } from "@chakra-ui/react";
import { HomeData } from "../Data2/Data";
import SliderComp from "./Slider";

const url = "https://json-mock-cp-cl1n.onrender.com/data";

const HomeProducts = () => {
  const data = useSelector((store) => store.Homereducer.data);
  const dispatch = useDispatch();
  console.log(data);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(getData(url));
    }
  }, [data.length]);

  return (
    <Box>
      <SliderComp
        data={HomeData.healthConcerns}
        heading="Shop by health concerns"
        height="210px"
      />
      <SliderComp
        data={HomeData.FeaturedBrands}
        heading="Featured brands"
        height="210px"
      />
      {data.length > 0 && <SliderComp
        data={data[1].Omega}
        heading="Omega & fish oil"
        height="281px"
      />}
      {data.length > 0 && <SliderComp
        data={data[0].mamaearth}
        heading="Mamaearth Products"
        height="281px"
      />}
      <SliderComp
        data={HomeData.Popular}
        heading="Featured brands"
        height="210px"
      />
      {data.length > 0 && <SliderComp
        data={data[2].combo}
        heading="Popular Combo Deals"
        height="281px"
      />}
      {data.length > 0 && <SliderComp
        data={data[3].tablets}
        heading="Calcium | supplement of the week"
        height="281px"
      />}
    </Box>
  );
};

export default HomeProducts;
