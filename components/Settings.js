import {
  StyleSheet,
  Text,
  View,
  Switch,
  Pressable,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from "react-native";

import { React, useState } from "react";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.lang}>
        <Text style={styles.txt1}> Language</Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={styles.lang}>
        <Text style={styles.txt1}>My Profile </Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={styles.lang}>
        <Text style={styles.txt1}> Contact Us </Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={styles.lang}>
        <Text style={styles.txt1}> Change Password</Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={styles.lang}>
        <Text style={styles.txt1}> Privacy Policy</Text>
        <Text style={styles.txt2}> {">"} </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.txt3}>Theme</Text>
        <Switch
          style={styles.switch}
          trackColor={{ false: "grey", true: " #ADF802" }}
          thumbColor={isEnabled ? "white" : "white"}
          onValueChange={toggleSwitch}
          value={isEnabled}
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
