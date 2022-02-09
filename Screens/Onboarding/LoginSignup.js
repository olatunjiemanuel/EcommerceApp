import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const LoginSignup = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text>LoginScreen</Text>
    </TouchableOpacity>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
