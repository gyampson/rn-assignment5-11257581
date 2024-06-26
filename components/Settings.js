import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  TouchableHighlight,
  Button,
  Appearance,
  TouchableOpacity,
} from "react-native";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "./themeContext";
import { React, useState, useContext } from "react";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [darkMode, setDarkMode] = useState(false);
  const theme = useContext(themeContext);
  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={[styles.lang, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.txt1, { color: theme.textColor }]}> Language</Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={[styles.lang, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.txt1, { color: theme.textColor }]}>
          My Profile{" "}
        </Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={[styles.lang, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.txt1, { color: theme.textColor }]}>
          {" "}
          Contact Us{" "}
        </Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={[styles.lang, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.txt1, { color: theme.textColor }]}>
          {" "}
          Change Password
        </Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={[styles.lang, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.txt1, { color: theme.textColor }]}>
          {" "}
          Privacy Policy
        </Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.txt3, { color: theme.textColor }]}>Theme</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "grey", true: " " }}
          thumbColor={isEnabled ? "white" : "white"}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit("ChangeTheme", value);
          }}
          value={darkMode}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
  },
  lang: {
    backgroundColor: "white",
    paddingBottom: 10,
    padding: 10,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    borderBottomWidth: 0.35,
    borderBlockColor: "grey",
  },
  txt1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  txt2: {
    fontSize: 30,
    color: "gray",
    fontWeight: "bold",
  },
  footer: {
    paddingTop: 30,
    flexDirection: "row",
  },
  switch: {
    left: 200,
  },
  txt3: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
