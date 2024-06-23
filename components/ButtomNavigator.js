import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import Mycard from "./Mycard";
import Statistics from "./Statistics";
import Settings from "./Settings";
const settings = require("../assets/settings.png");
const home = require("../assets/home.png");
const Tab = createBottomTabNavigator();
const myCards = require("../assets/myCards.png");
const statistics = require("../assets/statistics.png");

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "blue", // Adjust active tab color
        tabBarInactiveTintColor: "gray", // Adjust inactive tab color
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Image source={home} />,
        }}
      />
      <Tab.Screen
        name="My Cards"
        component={Mycard}
        options={{
          tabBarIcon: ({ color }) => <Image source={myCards} />,
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ color }) => <Image source={statistics} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => <Image source={settings} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
