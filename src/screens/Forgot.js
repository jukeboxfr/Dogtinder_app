import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";


import SimpleLayout from "../components/templates/SimpleLayout"

import ForgotStyle from "../styles/Forgot"

import { Title, Button, Header } from "../components";

import fr from "../locales/fr.json";

class Forgot extends Component {


  onPressForgot() {
    this.props.navigation.navigate("ForgotNext");
  }

  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={ForgotStyle.container}>
          <Title>{fr.FORGOT.TITLE}</Title>
          <Text style={ForgotStyle.text}>{fr.FORGOT.TEXT}</Text>
          <Button
            style={ForgotStyle.submit}
            onPress={() => this.onPressForgot()}>{fr.FORGOT.BUTTONS.SUBMIT}
          </Button>
        </View>
      </SimpleLayout>
    )
  }

}
export default Forgot;
