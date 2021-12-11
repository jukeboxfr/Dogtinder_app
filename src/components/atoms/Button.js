import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";



export default function Button({ backgroundColor, color, children }) {
  return (
    <View>
      <TouchableOpacity style={[styles.button, { backgroundColor }]}>
        <Text style={[styles.buttonText, { color }]}>{children}</Text>
      </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({


  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    width: 300,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 33,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 2
  },
  buttonText: {
    fontWeight: "bold",
    fontFamily: "Roboto",
    textTransform: "uppercase"
  }
})
