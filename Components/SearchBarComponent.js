import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

//Svg imports
import SearchBarSvg from "../assets/SVGs/SearchBarSvg";
//Colors imports
import Colors from "../assets/Colors/Colors";

const SearchBarComponent = () => {
  return (
    <View style={styles.textInputContainer}>
      <View style={styles.searchBarSvg}>
        <SearchBarSvg />
      </View>
      <View style={styles.textInputWrapper}>
        <TextInput style={styles.textInput} placeholder="Search" />
      </View>
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
    borderColor: Colors.Grey,
    borderWidth: 1,
    borderRadius: 30,
    width: 267,
    height: 60,
    alignItems: "center",
  },
  searchBarSvg: {
    paddingLeft: 21,
  },
  textInputWrapper: {
    paddingLeft: 12,
  },
  textInput: {
    width: 200,
    fontWeight: "600",
    fontSize: 17,
  },
});
