import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import Onboarding from "./Screens/Onboarding/Onboarding";
import HomeDrawerStack from "./Screens/MainStack/HomeDrawerStack";
//import Settings from "./Screens/Settings";
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
        <Stack.Screen name="MainStack" component={MainStack} />
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

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
    >
      <Stack.Screen name="HomeDrawerStack" component={HomeDrawerStack} />
    </Stack.Navigator>
  );
};

export default App;
