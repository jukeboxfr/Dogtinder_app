import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text,
         SafeAreaView, TextInput, KeyboardAvoidingView } from "react-native";


export default function NumberInput({ text }) {
  return (
    <View style={styles.form}>
      <TouchableOpacity style={styles.country}>
        <TextInput
          editable={false}
          style={styles.inputText}
          value="FxR +33" />
          <Image style={{width: 25, height: 16 }} source={require('../assets/dropdown.png')}>
          </Image>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={text}
        placeholderTextColor="#E5A3A9"
        keyboardType="numeric"
        />
        </View>
  )
}

const styles = StyleSheet.create({

  form: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    margin: 10
  },

  country: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDEDEE",
    borderColor: "#E9ABB0",
    borderWidth: 1,
    color: "#E5A3A9",
    padding: 20,
    borderRadius: 50,
    fontSize: 20,
  },

  inputText: {
      textAlign: "center",
      color: "#E5A3A9",
      fontSize: 25,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#FDEDEE",
    borderColor: "#E9ABB0",
    borderWidth: 1,
    color: "#E5A3A9",
    padding: 20,
    borderRadius: 50,
    fontSize: 20,
    textAlign: "center"
  }

})
