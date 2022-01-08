import React, { useState, Component } from "react";
import { View, TouchableOpacity, TextInput, Text, Image, SafeAreaView } from "react-native";
import styles from "../../styles/inputs";

class Input extends Component {

  render(){
    return (
      <View>
        <TextInput
          style={styles.baseInput}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor} />
      </View>
    )
  }
}

export default Input;
