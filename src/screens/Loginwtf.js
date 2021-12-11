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


const LoginForm = (props) => {
  return (
    <View style={styles.loginForm} >
      <NumberInput text="7 68 50 16 70" />
      <Button backgroundColor="#37A759" color="white">
        Continuer
      </Button>
    </View>
  )
}

const CloseButton = (props) => {
  return (
    <View style={styles.closeButton}>
      <TouchableOpacity>
        <Image style={{height: 35, width: 35}} source={require("./assets/home_cross.png")}>
        </Image>
      </TouchableOpacity>
    </View>
  )
}


const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerImage}>
        <ImageBackground style={styles.backgroundImage} resizeMode="contain" source={require("./assets/header_background.png")}>
          {props.children}
        </ImageBackground>
      </View>
    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CloseButton />
      <LoginForm />
    </View>
  );
}


const headerWidth = dimensions.width
const headerHeight = dimensions.height * 0.5

const headerImageWidth = headerWidth * 2
const headerImageHeight = headerHeight * 2


const styles = StyleSheet.create({

    loginForm: {
        alignItems: "center",
        justifyContent: "center"
    },

    loginCountry: {

    },

  closeButton: {
    top: -50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: dimensions.width,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.20,
    elevation: 40
  },

  header: {
    width: headerWidth,
    height: headerHeight,
    overflow: "hidden",
    position: "relative"
  },


  headerImage: {
    width: "200%",
    height: "200%",
    transform: [
      { translateX: (headerWidth * -0.50) },
      { translateY: (headerHeight * -1) }
    ],
    backgroundColor: "#ebebf1",
    borderBottomLeftRadius: headerWidth,
    borderBottomRightRadius: headerWidth,
    overflow: "hidden"
  },

  backgroundImage: {
    top: headerHeight - 100,
    position: "relative",
    flex: 1,
    bottom: 0,
  },


    button: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      margin: 10,
      width: 300,
      padding: 15,
      backgroundColor: "#FFFFFF",
      borderRadius: 33,
      shadowOffset: { width: 3, height: 6 },
      shadowRadius: 5,
      elevation: 2
    },

    button: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      margin: 10,
      width: 300,
      padding: 15,
      backgroundColor: "#FFFFFF",
      borderRadius: 33,
      shadowOffset: { width: 3, height: 6 },
      shadowRadius: 5,
      elevation: 2
    },

  container: {
    fontFamily: "Roboto",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
});
