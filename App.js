import { useState, useContext, React, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import theme from "./components/theme";
import themeContext from "./components/themeContext";
import HomeScreen from "./components/HomeScreen";
import Mycard from "./components/Mycard";
import Statistics from "./components/Statistics";
import Settings from "./components/Settings";
import BottomTabNavigator from "./components/ButtomNavigator";
import { EventRegister } from "react-native-event-listeners";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <BottomTabNavigator />
      </NavigationContainer>
    </themeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
