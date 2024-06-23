import React, { useState } from "react";
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={profile} />
        <Text style={styles.txt1}>Welcome Back</Text>
        <Text style={styles.txt2}>Samson</Text>
        <View style={styles.search1}>
          <Image source={search} style={styles.search} />
        </View>
      </View>

      <View>
        <Image source={Card} />
      </View>
      <View style={styles.icons}>
        <View style={styles.send}>
          <Image source={send} />
        </View>

        <View style={styles.send}>
          <Image source={recieve} />
        </View>
        <View style={styles.send}>
          <Image source={loan} />
        </View>
        <View style={styles.send}>
          <Image source={topUp} />
        </View>
      </View>
      <View style={styles.Text2}>
        <Text>Send</Text>
        <Text>Recieve</Text>
        <Text>Loan</Text>
        <Text>Top Up</Text>
      </View>
      <View style={styles.Text3}>
        <Text style={styles.txt3}>Transaction</Text>
        <Text style={styles.txt4}>Sell All</Text>
      </View>
      <ScrollView>
        <View style={styles.Transaction}>
          <View style={styles.send}>
            <Image source={apple} />
          </View>

          <Text style={styles.trans1}>apple store</Text>
          <Text style={styles.trans2}>entertainment</Text>
          <Text style={styles.trans3}>-$5,99</Text>
        </View>
        <View style={styles.Transaction}>
          <View style={styles.send}>
            <Image source={spotify} />
          </View>

          <Text style={styles.trans1}>Spotify</Text>
          <Text style={styles.trans2}>Music</Text>
          <Text style={styles.trans3}>-$5,99</Text>
        </View>
        <View style={styles.Transaction}>
          <View style={styles.send}>
            <Image source={moneyTransfer} />
          </View>

          <Text style={styles.trans1}>Money Transfer</Text>
          <Text style={styles.trans2}>Transaction</Text>
          <Text style={styles.trans3}>-$5,99</Text>
        </View>
        <View style={styles.Transaction}>
          <View style={styles.send}>
            <Image source={grocery} />
          </View>

          <Text style={styles.trans1}>Grocery</Text>
          <Text style={styles.trans2}>Food Stuffs</Text>
          <Text style={styles.trans3}>-$5,99</Text>
        </View>
        <View style={styles.Transaction}>
          <View style={styles.send}>
            <Image source={apple} />
          </View>

          <Text style={styles.trans1}>apple store</Text>
          <Text style={styles.trans2}>entertainment</Text>
          <Text style={styles.trans3}> -$5,99</Text>
        </View>
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
  txt2: {
    top: 20,
    right: 70,
  },
  search1: {
    backgroundColor: "rgb(211, 211, 211)",
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    left: 90,
  },
  search: {},
  icons: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  send: {
    backgroundColor: "rgb(211, 211, 211)",
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
  trans2: {
    top: 20,
    right: 80,
  },
});
