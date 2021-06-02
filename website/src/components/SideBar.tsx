import { Box, Button, Link,  VStack } from '@chakra-ui/react';
import React from 'react';


const SideBar = () => {
  return (
    <Box position="fixed" p = {5} left = {0}>
      <VStack>
        <Button w= "10vw"> <Link href="/home"> Home </Link> </Button>
        <Button w = "10vw"> <Link href="/basic">Part One </Link> </Button>
        <Button w = "10vw"> <Link href="/advanced"> Part Two  </Link></Button>
        <Button w = "10vw"> <Link href="/evaluation"> Part Three </Link></Button>
        <Button w = "10vw"> <Link href="/citations"> Citations </Link></Button>
      </VStack>
    </Box>
  );
};

export default SideBar;
 