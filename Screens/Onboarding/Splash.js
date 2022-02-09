import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LoginSignup");
        }}
      >
        <Text>SplashScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
