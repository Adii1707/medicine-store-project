import { Button, Stack } from "@chakra-ui/react";

const Diseases = () => {
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
  const handleAdd=(item)=>{
    if(item=="A"){
        console.log(item)
    }
  }
  return (
    <div>
      <div>Diseases</div>
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
    </div>
  );
};

export { Diseases };
