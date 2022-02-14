import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

// Colors
import Colors from "../../assets/Colors/Colors";
//Component imports
import MainButtonComponent from "../../Components/MainButtonComponent";

// Svg Imports
import MessageSvg from "../../assets/SVGs/MessageSvg";

//component Imports
import FormComponent from "../../Components/FormComponent";

const LoginSignup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome back</Text>
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.formContainer}>
          <FormComponent
            placeHolder="rosina@company.com"
            formName="Email"
            formSvg={<MessageSvg />}
            textContentType="emailAddress"
          />
        </View>
        <View>
          <FormComponent
            placeHolder="Password"
            formName="Password"
            formSvg={<MessageSvg />}
            textContentType="password"
          />
        </View>
        <View style={styles.forgotPasscode}>
          <Text>Forgot passcode?</Text>
        </View>
        <View style={styles.MainButtonComponentContainer}>
          <MainButtonComponent
            buttonText="Login"
            buttonBgColor={Colors.Primary}
            buttonTextColor={Colors.White}
            onPressHandler={() => {
              navigation.navigate("MainStack");
            }}
          />
        </View>
        <View style={styles.createAccount}>
          <Text>Create account</Text>
        </View>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 40 : null,
    justifyContent: "center",
    backgroundColor: Colors.Primary,
  },
  headerContainer: {
    paddingBottom: 40,
    paddingTop: 54,
    paddingHorizontal: 50,
  },
  headerText: {
    fontWeight: "800",
    fontSize: 65,
    color: Colors.White,
  },
  bottomHalf: {
    backgroundColor: Colors.White,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 50,
  },
  loginTextContainer: {
    paddingTop: 36,
  },
  loginText: {
    fontWeight: "700",
    fontSize: 18,
  },
  formContainer: {
    paddingTop: 41,
    paddingBottom: 45,
  },
  forgotPasscode: {
    paddingTop: 24,
  },
  MainButtonComponentContainer: {
    paddingTop: 62,
    alignItems: "center",
  },
  createAccount: {
    alignItems: "center",
    paddingTop: 19,
  },
  cancelButton: {
    marginHorizontal: 110,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 50,
  },
});
