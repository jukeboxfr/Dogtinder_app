import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Dimensions, SafeAreaView,
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, Image, ImageBackground
} from 'react-native';
import Svg, { Circle } from "react-native-svg";

import Button from "./components/Button";
import NumberInput from "./components/NumberInput";

const dimensions = Dimensions.get("window")
const windowWidth = dimensions.width
const windowHeight = dimensions.height


const Topbar = (props) => {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity style={styles.topbarBack}>
        <Image style={{ width: 35, height: 34 }} source={require("./assets/back.png")}>
        </Image>
      </TouchableOpacity>
      <TextInput placeholderTextColor="#F2C6CB" style={styles.topbarSearch}
        placeholder="Rechercher"
      />
    </View>
  )
}

const List = (props) => {
  return (
    <View style={styles.list}>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.country}>France</Text>
        <Text style={styles.code}>+33</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.country}>Canada</Text>
        <Text style={styles.code}>+33</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Topbar />
      <List />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  },
  topbar: {
    height: 80,
    display: "flex",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#E9ABB2",
    borderBottomColor: "#DC858F",
    borderBottomWidth: 1,
    shadowOpacity: 0.16,
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 6,
    shadowColor: "black",
    elevation: 20
  },
  topbarSearch: {
    marginLeft: 20,
    fontSize: 20,
    color: "#F2C6CB",
    flex: 1
  },
  list: {
    color: "#707070",
    display: "flex",
    flexDirection: "column"
  },

  item: {
    padding: 20,
    display: "flex",
    flexDirection: "row"
  },

  country: {
    flex: 1,
    fontSize: 20,
    color: "#707070",
  },

  code: {
    fontSize: 20  ,
    color: "#707070",
  }
})
