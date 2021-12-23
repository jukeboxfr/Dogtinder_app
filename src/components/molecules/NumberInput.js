import React, { useState, Component } from "react";
import { View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import styles from "../../styles/inputs";

class NumberInput extends Component {

  render() {
    return (
      <View style={styles.form}>
        <View style={styles.countryCheckList}>
          <TextInput
            editable={false}
            style={styles.countryInput}
            value="FR +33" />
          <Image style={styles.checkListIcon} source={require("../../../assets/images/icons/dropdown.png")} />
        </View>
        <TextInput
          style={styles.digitsInput}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          keyboardType="numeric" />
      </View>
    )
  }
}

export default NumberInput;
