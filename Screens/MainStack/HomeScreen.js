import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { auth } from "../../fireBase";

//component Imports
import SearchBarComponent from "../../Components/SearchBarComponent";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SearchBarWrapper}>
        <SearchBarComponent />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text} numberOfLines={2}>
          Order online collect in store
        </Text>
      </View>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: Platform.OS == "ios" ? 40 : null,
  },
  SearchBarWrapper: { paddingHorizontal: 65 },
  textWrapper: {
    paddingTop: 55,
  },
  text: {
    paddingHorizontal: 50,
    fontWeight: "700",
    fontSize: 34,
    height: 100,
  },
});
