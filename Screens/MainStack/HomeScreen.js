import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { auth } from "../../fireBase";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
