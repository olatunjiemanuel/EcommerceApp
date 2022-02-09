import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Onboarding from "./Screens/Onboarding/Onboarding";
import HomeScreen from "./Screens/HomeScreen";
import Settings from "./Screens/Settings";
import Splash from "./Screens/Onboarding/Splash";
import LoginSignup from "./Screens/Onboarding/LoginSignup";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Onboarding = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="LoginSignup" component={LoginSignup} />
    </Stack.Navigator>
  );
};

export default App;
