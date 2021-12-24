import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";

import SimpleLayout from "../components/templates/SimpleLayout"


import ValidationStyle from "../styles/Validation"

import { CodeInput, Title, Button, Header } from "../components";

import fr from "../locales/fr.json";

const styles = StyleSheet.create({

})

class Verification extends Component {

  onPressForgot() {
    this.props.navigation.navigate("");
  }

  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={ValidationStyle.container}>
          <Title style={styles.forgotTitle}>{fr.VALIDATION.TITLE}</Title>

        </View>
      </SimpleLayout>
    )
  }

}
export default Validation;
