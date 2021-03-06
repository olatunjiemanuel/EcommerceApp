import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import Colors from "../assets/Colors/Colors";

const MainButtonComponent = (props) => {
  const { buttonText, buttonBgColor, buttonTextColor, onPressHandler } = props;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: buttonBgColor }]}
      onPress={onPressHandler}
    >
      <Text style={[styles.buttonText, { color: buttonTextColor }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButtonComponent;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 70,
    width: 314,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
  },
});
