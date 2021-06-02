import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '@components/Hero'
import { Container } from '@components/Container'
import { Main } from '@components/Main'
import { DarkModeSwitch } from '@components/DarkModeSwitch'
import { CTA } from '@components/CTA'
import { Footer } from '@components/Footer'
import React from 'react'
import SideBar from '@components/SideBar'
import ContentView from '@components/ContentView'

const Evaluation = () => {
  return (<Container h="100vh">
    <SideBar/>
    <ContentView>
      Evaluation Page
    </ContentView>
    <DarkModeSwitch/>
  </Container>)
};
export default Evaluation;
