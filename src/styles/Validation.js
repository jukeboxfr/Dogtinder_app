import React from "react";
import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  "header": {
    "marginTop": StatusBar.currentHeight * 2,
    "marginLeft": 20
  },

  "container": {
    "padding": 50
  },
  "backButton": {
    "backgroundColor": "white",
    "width": 55,
    "height": 55,
    "shadowColor": "#000",
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowOpacity": 0.32,
    "shadowRadius": 5.46,
    "elevation": 9
  },
  "backButtonIcon": {
    "width": 30,
    "height": 30
  }
})
