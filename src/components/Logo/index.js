import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import styles from "./styles";

const Logo = () => (
  <View style={styles.container}>
    <Image
      resizeMode="contain"
      style={styles.logo}
      source={require("./images/logo.png")}
    />
    <Text style={styles.text}>Be Happy With Me</Text>
  </View>
);

export default Logo;
