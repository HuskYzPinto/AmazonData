import { Button, Flex, FlexProps, Link,  VStack } from '@chakra-ui/react';
import { Container } from '@components/Container';

const SideBar = () => {
  return (
    <Container>
      <VStack>
        <Button> <Link href="/basic">Part One </Link> </Button>
        <Button> <Link href="/advanced"> Part Two  </Link></Button>
        <Button> <Link href="/evaluation"> Part Three </Link></Button>
        <Button> <Link href="/citations"> Citations </Link></Button>
      </VStack>
    </Container>
  );
};

export default SideBar;
 