import {
  Link as ChakraLink,
  Flex,
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
const Basic = () => {
  return (<Container h="100vh">
            <SideBar/>
            <ContentView>
              <Flex>Hello</Flex>
            </ContentView>
            <DarkModeSwitch/>
          </Container>)
};

export default Basic;
