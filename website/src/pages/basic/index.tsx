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
const Basic = () => {
  return (<Container h="100vh">
            <SideBar/>
            <Main>
              <Flex>Hello</Flex>
            </Main>
            <DarkModeSwitch/>
          </Container>)
};

export default Basic;
