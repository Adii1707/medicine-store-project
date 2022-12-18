import { Box, Checkbox, Stack } from "@chakra-ui/react";
import React from "react";
import data from "../data/uses.json";
const Discount = () => {
  console.log(data, "ppp");
  const { users } = data;
  return (
    <div>
      <Stack
        textAlign="center"
        border="1px solid grey"
        height="300px"
        overflow="auto"
      >
        <Box height="500px">
          {users.map((items, i) => (
            <Box overflow="hidden" key={i}  height="30px">
              {" "}
              <Checkbox colorScheme="red" mt="10px"></Checkbox>
              <label style={{ fontSize: "12px", marginLeft: "15px" }}>
                {items.user}
              </label>
            </Box>
          ))}
        </Box>
      </Stack>
    </div>
  );
};

export default Discount;
