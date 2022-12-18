import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from './Navbar';
import { FetchData } from './fetchData';


export const Admin = () => {
  return (
    <div>
        <Navbar />
        <Heading width={"full"}  p={3} bg={'orange.100'}>Admin Page</Heading>
        <FetchData />

    </div>
  )
}
