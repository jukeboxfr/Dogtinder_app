import React from "react";
import { StyleSheet } from "react-native";


import Colors from "./colors";

const container = {
  backgroundColor: Colors.primary,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  fontFamily: "Roboto"
}

const colsCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
}

const styles = {
  container,
  colsCenter
}

export default StyleSheet.create(styles);
