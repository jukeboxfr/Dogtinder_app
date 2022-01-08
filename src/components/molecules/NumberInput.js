import React, { useState, Component } from "react";
import { View, TouchableOpacity, TextInput, Text, Image } from "react-native";
import styles from "../../styles/inputs";



class NumberInput extends Component {

  render() {
    return (
      <View style={styles.form}>
        <TouchableOpacity
          style={styles.countryCheckList}
          onPress={this.props.onPressNumberCode}>
          <TextInput
            editable={false}
            style={styles.countryInput}
            onChangeText={this.props.onChangeNumberCode}
            value={`${this.props.value.country} ${this.props.value.code}`} />
          <Image
            style={styles.checkListIcon}
            source={require("../../../assets/images/icons/dropdown.png")} />
        </TouchableOpacity>
        <TextInput
          value={this.props.value.number}
          style={styles.digitsInput}
          onChangeText={this.props.onChangeNumberPhone}
          placeholder={this.props.value.number}
          placeholderTextColor={this.props.placeholderTextColor} keyboardType="numeric" />
      </View>
    )
  }
}

export default NumberInput;
