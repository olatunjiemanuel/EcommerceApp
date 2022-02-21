import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
// Component Imports
import MainButtonComponent from "../../Components/MainButtonComponent";

// Colors Imports
import Colors from "../../assets/Colors/Colors";

//Auth imports
import { auth } from "../../fireBase";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Onboarding");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <View style={styles.container}>
      <MainButtonComponent
        buttonText="SignOut"
        buttonBgColor={Colors.Primary}
        buttonTextColor={Colors.White}
        onPressHandler={handleSignOut}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
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
