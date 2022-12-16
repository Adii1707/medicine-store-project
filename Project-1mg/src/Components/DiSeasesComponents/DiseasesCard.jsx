import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const DiseasesCard=({el,id})=>{
// console.log(el)
// console.log("hi")
//console.log(id)
    return (
        <div>
       
       <Link to={`/diseases/${id}`} ><Card width="400px" margin="auto" height="100px" 
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
 <Image
    objectFit='cover'
   width="50px"
   height="50px"
   marginTop="10px"
   marginLeft="10px"

    src={el.image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading fontSize="20px">{el.title}</Heading>

      <Text fontSize="15px">
        {el.desc}
      </Text>
    </CardBody>

   
  </Stack>
</Card></Link>
</div>
    )
}

export {DiseasesCard}