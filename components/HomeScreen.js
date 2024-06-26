import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import themeContext from "./themeContext";
const profile = require("../assets/profile.png");
const search = require("../assets/search.png");
const Card = require("../assets/Card.png");
const recieve = require("../assets/recieve.png");
const topUp = require("../assets/topUp.png");
const send = require("../assets/send.png");
const moneyTransfer = require("../assets/moneyTransfer.png");
const loan = require("../assets/loan.png");
const apple = require("../assets/apple.png");
const grocery = require("../assets/grocery.png");
const spotify = require("../assets/spotify.png");

const HomeScreen = () => {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <View style={styles.header}>
        <Image source={profile} />
        <Text style={styles.txt1}>Welcome back,</Text>
        <Text style={[styles.txt2, { color: theme.textColor }]}>Samson</Text>
        <View style={[styles.search1, { backgroundColor: theme.theme }]}>
          <Image
            source={search}
            style={[styles.search, { tintColor: theme.tintColor }]}
          />
        </View>
      </View>

      <View>
        <Image source={Card} />
      </View>
      <View style={styles.icons}>
        <View style={[styles.send, { backgroundColor: theme.theme }]}>
          <Image source={send} style={{ tintColor: theme.tintColor }} />
        </View>

        <View style={[styles.send, { backgroundColor: theme.theme }]}>
          <Image source={recieve} style={{ tintColor: theme.tintColor }} />
        </View>
        <View style={[styles.send, { backgroundColor: theme.theme }]}>
          <Image source={loan} style={{ tintColor: theme.tintColor }} />
        </View>
        <View style={[styles.send, { backgroundColor: theme.theme }]}>
          <Image source={topUp} style={{ tintColor: theme.tintColor }} />
        </View>
      </View>
      <View style={[styles.Text2, { backgroundColor: theme.backgroundColor }]}>
        <Text style={styles.let}>Send</Text>
        <Text style={styles.let}>Recieve</Text>
        <Text style={styles.let}>Loan</Text>
        <Text style={styles.let}>Top Up</Text>
      </View>
      <View style={styles.Text3}>
        <Text style={[styles.txt3, { color: theme.textColor }]}>
          Transaction
        </Text>
        <Text style={styles.txt4}>Sell All</Text>
      </View>
      <ScrollView>
        <View
          style={[
            styles.Transaction,
            { backgroundColor: theme.backgroundColor },
          ]}
        >
          <View style={[styles.send, { backgroundColor: theme.theme }]}>
            <Image source={apple} style={{ tintColor: theme.tintColor }} />
          </View>

          <Text style={[styles.trans1, { color: theme.textColor }]}>
            Apple store
          </Text>
          <Text style={styles.trans2}>Entertainment</Text>
          <Text style={[styles.trans3, { color: theme.textColor }]}>
            -$5,99
          </Text>
        </View>
        <View
          style={[
            styles.Transaction,
            { backgroundColor: theme.backgroundColor },
          ]}
        >
          <View style={[styles.send, { backgroundColor: theme.theme }]}>
            <Image source={spotify} />
          </View>

          <Text style={[styles.trans11, { color: theme.textColor }]}>
            Spotify
          </Text>
          <Text style={styles.trans22}>Music</Text>
          <Text style={[styles.trans33, { color: theme.textColor }]}>
            -$12,99
          </Text>
        </View>
        <View
          style={[
            styles.Transaction,
            { backgroundColor: theme.backgroundColor },
          ]}
        >
          <View style={[styles.send, { backgroundColor: theme.theme }]}>
            <Image
              source={moneyTransfer}
              style={{ tintColor: theme.tintColor }}
            />
          </View>

          <Text style={[styles.transI, { color: theme.textColor }]}>
            Money Transfer
          </Text>
          <Text style={styles.transII}>Transaction</Text>
          <Text style={styles.transIII}>$300</Text>
        </View>
        <View
          style={[
            styles.Transaction,
            { backgroundColor: theme.backgroundColor },
          ]}
        >
          <View style={[styles.send, { backgroundColor: theme.theme }]}>
            <Image source={grocery} />
          </View>

          <Text style={[styles.trans12, { color: theme.textColor }]}>
            Grocery
          </Text>
          <Text style={styles.trans21}>Food Stuffs</Text>
          <Text style={[styles.trans32, { color: theme.textColor }]}>-$88</Text>
        </View>
        <View
          style={[
            styles.Transaction,
            { backgroundColor: theme.backgroundColor },
          ]}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",

    paddingLeft: 10,
  },
  header: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  Text2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },
  txt1: {
    textColor: "red",
    left: 20,
    color: "grey",
  },
  let: {
    color: "grey",
  },
  txt2: {
    fontSize: 25,
    fontWeight: "bold",
    top: 20,
    right: 70,
  },
  search1: {
    backgroundColor: "rgb(224, 224, 224)",
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    left: 40,
  },

  icons: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  send: {
    backgroundColor: "rgb(224, 224, 224)",
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  txt3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  Text3: {
    flexDirection: "row",
    paddingBottom: 20,
    paddingLeft: 10,
  },
  txt4: {
    left: 180,
    color: "blue",
  },
  Transaction: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: "white",
    paddingRight: 20,
    paddingLeft: 24,
    borderRadius: 20,
    width: 327,
    height: 74,

    borderColor: "red",
  },
  trans1: {
    fontWeight: "bold",
  },
  trans2: {
    top: 20,
    right: 80,
    color: "grey",
  },
  trans3: {
    left: 30,
  },
  trans11: {
    right: 20,
    fontWeight: "bold",
  },
  trans22: {
    right: 96,
    top: 25,
    color: "grey",
  },
  trans33: {
    left: 30,
  },
  transI: {
    fontWeight: "bold",
  },
  transII: {
    right: 105,
    top: 25,
    color: "grey",
  },
  transIII: {
    color: "blue",
    left: 30,
  },
  trans12: {
    right: 20,
    fontWeight: "bold",
  },
  trans21: {
    right: 96,
    top: 25,
    color: "grey",
  },
  trans32: {
    left: 30,
  },
});
