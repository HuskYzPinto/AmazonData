import { Box, Link, List, ListItem, Text } from '@chakra-ui/react';
import { Container } from '@components/Container';
import { Main } from '@components/Main';
import { DarkModeSwitch } from '@components/DarkModeSwitch';
import SideBar from '@components/SideBar';
import { Hero } from '@components/Hero';
import React from "react"

const Home = () => {
  return (
    <Container h="100vh">
      <SideBar/>
      <DarkModeSwitch/>
    </Container>
  );
};

export default Home;
