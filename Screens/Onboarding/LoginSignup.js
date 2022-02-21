import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

//Auth imports
import { auth } from "../../fireBase";

// Colors
import Colors from "../../assets/Colors/Colors";
//Component imports
import MainButtonComponent from "../../Components/MainButtonComponent";

// Svg Imports
import MessageSvg from "../../assets/SVGs/MessageSvg";

//component Imports
import FormComponent from "../../Components/FormComponent";

const LoginSignup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("MainStack");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in With", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ScrollView>
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
              value={email}
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <View>
            <FormComponent
              placeHolder="Password"
              formName="Password"
              formSvg={<MessageSvg />}
              textContentType="password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
              }}
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
                handleLogin();
                // navigation.navigate("MainStack");
              }}
            />
          </View>
          <TouchableOpacity style={styles.createAccount} onPress={handleSignUp}>
            <Text>Create account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
