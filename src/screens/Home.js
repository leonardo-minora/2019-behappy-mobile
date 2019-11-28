import React from "react";
import { StatusBar } from "react-native";

import { Container, LoginIconButtons, Logo } from "../components";
import { LOGIN_SCREEN } from "../config/routes";

const Home = props => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
    
  </Container>
);

export default Home;
