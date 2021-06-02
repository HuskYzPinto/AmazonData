import React from 'react';
import { Stack, StackProps } from '@chakra-ui/react'


const ContentView = (props: StackProps) => {
  return ( <Stack
    spacing="1.5rem"
    width="100%"
    maxWidth="48rem"
    pt="2rem"
    px="1rem"
    {...props}
  />)
}

export default ContentView;