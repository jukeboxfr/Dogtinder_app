import React, { useState } from "react";
import {
  StyleSheet, View, Image, TouchableOpacity, Text,
  SafeAreaView, TextInput, KeyboardAvoidingView
} from "react-native";


const DropdownImage = (props) =>
  (<Image style={{ width: 25, height: 15 }} source={require("../../assets/images/dropdown.png")} />)

const Select = (props) => {
  return (
    <View style={}>
      <TouchableOpacity style={styles.country}>
        <TextInput
          editable={false}
          style={styles.inputText}
          value={props.value} />
        <DropdownImage />
      </TouchableOpacity>
    </View>
  )
}

export default Select;
