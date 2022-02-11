import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Text>Profile</Text>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
