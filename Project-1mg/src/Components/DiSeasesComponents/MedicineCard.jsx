import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"

const MedicineCard=({el})=>{

    return (
        <div>
                
       <Card width="420px" margin="auto" height="180px" 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
 <Image
    objectFit='cover'
   width="50px"
   height="100px"
   marginTop="10px"
   marginLeft="10px"

    src={el.image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading fontSize="20px">{el.title}</Heading>

      <Text fontSize="17px">
        {el.title2}
      </Text>
      <Text fontSize="14px">
        {el.title3}
      </Text>
      <Text fontSize="12px">
        {el.title4}
      </Text>
    </CardBody>

   
  </Stack>
  <Stack marginLeft="10px">
  <Text fontSize="15px" fontWeight="bold" >
      MRP  {el.price}
      </Text>
  </Stack>
</Card>



        </div>
    )
}

export {MedicineCard}