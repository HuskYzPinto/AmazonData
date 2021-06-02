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
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { CTA } from '../components/CTA'
import { Footer } from '../components/Footer'

const Index = () => (
  <Container height="100vh">
    <Hero />
    <Main>
      <Text>
        A student's website for 7130ICT Data Analytics assignment.
      </Text>

      <List spacing={3} my={0}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://griffith.edu.au"
            flexGrow={1}
            mr={2}
          >
            Griffith University <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://jupyter.org" flexGrow={1} mr={2}>
            Jupyter Notebook <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://pandas.pydata.org" flexGrow={1} mr={2}>
            pandas <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="http://jmcauley.ucsd.edu/data/amazon/links.html" flexGrow={1} mr={2}>
            Amazon reviews data from Julian McAuley, UCSD <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Made using <Code>Example app with chakra-ui and Typescript </Code> </Text>
    </Footer>
    <CTA />
  </Container>
)

export default Index
