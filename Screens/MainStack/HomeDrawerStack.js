import "react-native-gesture-handler";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen imports
import HomeScreen from "./HomeScreen";
import Profile from "./Profile";
import LikesScreen from "./LikesScreen";
import BuyScreen from "./BuyScreen";

// Svg imports
import HomeSvg from "/Users/olatunji/EcommerceApp/assets/SVGs/HomeSvg.js";
import LikesSvg from "/Users/olatunji/EcommerceApp/assets/SVGs/LikesSvg";
import ProfileSvg from "/Users/olatunji/EcommerceApp/assets/SVGs/ProfileSvg";
import BuySvg from "/Users/olatunji/EcommerceApp/assets/SVGs/BuySvg";

// colors Imports
import Colors from "/Users/olatunji/EcommerceApp/assets/Colors/Colors";

//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function HomeDrawerStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: "#fff",
            position: "absolute",
            height: 65,
            width: 352,
            marginHorizontal: 18,
            borderRadius: 69,
            marginBottom: 20,
          },
          null,
        ],
        header: () => null,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabIcons}>
              <HomeSvg
                bgcolor={focused ? Colors.Primary : Colors.White}
                strokeColor={focused ? Colors.Primary : Colors.Black}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LikesScreen"
        component={LikesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabIcons}>
              <LikesSvg
                bgcolor={focused ? Colors.Primary : Colors.White}
                strokeColor={focused ? Colors.White : Colors.Black}
                strokeOutlineColor={focused ? Colors.Primary : Colors.Black}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabIcons}>
              <ProfileSvg
                bgcolor={focused ? Colors.Primary : Colors.White}
                strokeColor={focused ? Colors.Primary : Colors.Black}
                strokeOutlineColor={focused ? Colors.Primary : Colors.Black}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="BuyScreen"
        component={BuyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.TabIcons}>
              <BuySvg
                bgcolor={focused ? Colors.Primary : Colors.White}
                strokeColor={focused ? Colors.Primary : Colors.Black}
                strokeOutlineColor={focused ? Colors.Primary : Colors.Black}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    // <Drawer.Navigator
    //   screenOptions={{
    //     header: () => null,
    //   }}
    // >
    //   <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    //   <Drawer.Screen name="Settings" component={Settings} />
    // </Drawer.Navigator>
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
