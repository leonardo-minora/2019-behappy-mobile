import React from "react";
import { StatusBar } from "react-native";

import { Container, InputText, Logo } from "../components";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: "", senha: ""};
  }

  render(props) {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content"  />
        <Logo />
        <InputText 
          label={"Login"} 
          placeholder="meu@email.com" 
          iconName="user" />
        <InputText 
          label="Senha"
          placeholder="sua senha" 
          iconName="lock" />
      </Container>
    );
  }
}
