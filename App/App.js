import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./components/HomeScreen";
import Mycard from "./components/Mycard";
import Statistics from "./components/Statistics";
import Settings from "./components/Settings";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
