import React from "react";
import { Button, View } from "react-native";

import styles from "./styles";

const LoginIconButtons = ({
  onPressOffline = () => console.log("pressed offilne"),
  onPressLogin = () => console.log("pressed login"),
  onPressSignup = () => console.log("pressed signup")
}) => {
  return (
    <View style={styles.container}>
      <Button
        color={styles.button.color}
        onPress={onPressOffline}
        title="Offline"
      />
      <Button
        color={styles.button.color}
        onPress={onPressLogin}
        title="Login"
      />
      <Button
        color={styles.button.color}
        onPress={onPressSignup}
        title="Criar usuário"
      />
    </View>
  );
};

export default LoginIconButtons;
