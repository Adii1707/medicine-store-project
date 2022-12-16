import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { AllRoutes } from './Routes/AllRoutes';
import Home from './Pages/Home';
import "./App.css"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Home/>
       {/* <AllRoutes /> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
