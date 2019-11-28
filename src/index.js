import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import AppContainer from "./config/routes";

EStyleSheet.build({
  $primaryBlue: "#4F6D7A",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F",
  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $darkText: "#343434"
});

export default () => <AppContainer />;

// V3
//
// import React from "react";
// import EStyleSheet from "react-native-extended-stylesheet";
//
// import { Login } from "./screens";
//
// EStyleSheet.build({
//   $primaryBlue: "#4F6D7A",
//   $primaryOrange: "#D57A66",
//   $primaryGreen: "#00BD9D",
//   $primaryPurple: "#9E768F",
//   $white: "#FFFFFF",
//   $lightGray: "#F0F0F0",
//   $border: "#E2E2E2",
//   $inputText: "#797979",
//   $darkText: "#343434"
// });
//
// export default () => <Login />;

// V2
//
// import React, { Component } from "react";
// import EStyleSheet from "react-native-extended-stylesheet";
//
// import { Container, LoginIconButtons, Logo } from "./components";
//
// class App extends Component {
//   render() {
//     return (
//       <Container>
//         <Logo />
//         <LoginIconButtons />
//       </Container>
//     );
//   }
// }
//
// EStyleSheet.build({
//   $primaryBlue: "#4F6D7A",
//   $primaryOrange: "#D57A66",
//   $primaryGreen: "#00BD9D",
//   $primaryPurple: "#9E768F",
//
//   $white: "#FFFFFF",
//   $lightGray: "#F0F0F0",
//   $border: "#E2E2E2",
//   $inputText: "#797979",
//   $darkText: "#343434"
// });
//
// export default App;

// V1
//
// import React, { Component } from "react";
// import { StyleSheet, Text, View } from "react-native";
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Meu primeiro app!</Text>
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
