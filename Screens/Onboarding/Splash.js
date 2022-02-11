import "react-native-gesture-handler";
import { StyleSheet, Text, View, Platform, Image } from "react-native";
import React from "react";

//Colors Imports
import Colors from "../../assets/Colors/Colors";

//Component Imports
import MainButtonComponent from "/Users/olatunji/EcommerceApp/Components/MainButtonComponent";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Find your Item</Text>
      </View>
      <View>
        <Image
          source={require("/Users/olatunji/EcommerceApp/assets/Images/FindYourGadget.png")}
        />
      </View>
      {/* <View
        onPress={() => {
          navigation.navigate("LoginSignup");
        }}
      >
        <Text>SplashScreen</Text>
      </View> */}

      <View style={styles.buttonContainer}>
        <MainButtonComponent
          buttonText="Get started"
          buttonBgColor={Colors.White}
          buttonTextColor={Colors.Primary}
          onPressHandler={() => {
            navigation.navigate("LoginSignup");
          }}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "ios" ? 40 : null,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Primary,
  },
  mainTextContainer: {},
  mainText: {
    color: Colors.White,
    fontSize: 65,
    paddingHorizontal: 50,
    fontWeight: "800",
  },
  buttonContainer: {
    paddingTop: 39,
    paddingBottom: 80,
  },
});
