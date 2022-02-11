import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const LikesScreen = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>Likes</Text>
    </TouchableOpacity>
  );
};

export default LikesScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
