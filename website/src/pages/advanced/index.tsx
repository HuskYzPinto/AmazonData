import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { Container } from '@components/Container';
import { Main } from '@components/Main';
import { DarkModeSwitch } from '@components/DarkModeSwitch';
import SideBar from '@components/SideBar';
import React from "react"
import ContentView from '@components/ContentView';

const Advanced = () => {
  return (<Container h="100vh">
    <SideBar/>
    <ContentView>
      Advanced Analysis here
    </ContentView>
    <DarkModeSwitch/>
  </Container>)
};

export default Advanced;