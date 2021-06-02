import { Flex } from "@chakra-ui/layout"
import SideBar from "@components/SideBar"
import React from "react"
import { DarkModeSwitch } from "@components/DarkModeSwitch"
import { Main } from "@components/Main"
import { Container } from "@components/Container"


const Citations = () => {
  return <Container h="100vh">
    <SideBar/>
    <Main>

    </Main>
    <DarkModeSwitch/>
    Ups and downs: Modeling the visual evolution of fashion trends with one-class collaborative filtering R. He, J. McAuley WWW, 2016
  </Container>
}

export default Citations