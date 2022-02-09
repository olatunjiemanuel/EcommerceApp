import "react-native-gesture-handler";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

//Screen imports
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";

const Drawer = createDrawerNavigator();

function HomeDrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate("Settings");
//         }}
//       >
//         <Text>Home</Text>
//       </TouchableOpacity>
//       <Button title="Go back" onPress={() => navigation.goBack("Onboarding")} />
//     </View>
//   );
// };

export default HomeDrawerStack;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
