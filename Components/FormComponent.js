import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

//Colors Import
import Colors from "../assets/Colors/Colors";

const FormComponent = (props) => {
  const {
    placeHolder,
    formName,
    formSvg,
    textContentType,
    value,
    onChangeText,
  } = props;
  return (
    <View>
      <View style={styles.formHeader}>
        <View>{formSvg}</View>
        <View style={styles.formNameContainer}>
          <Text style={styles.formName}>{formName}</Text>
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder={placeHolder}
          style={styles.textInput}
          textContentType={textContentType}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default FormComponent;

const styles = StyleSheet.create({
  formHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  formNameContainer: {
    paddingLeft: 11,
  },
  formName: {
    color: Colors.Grey2,
  },
  textInputContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.Grey,
  },
  textInput: {
    paddingTop: 12,
    paddingBottom: 12,
  },
});
