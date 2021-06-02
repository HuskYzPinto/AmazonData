import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={3}
  >
    <ChakraLink href="/home" flexGrow={1} mx={2}>
      <Button width="100%" variant="outline" colorScheme="green">
        Enter the site
      </Button>
    </ChakraLink>
  </Container>
)
