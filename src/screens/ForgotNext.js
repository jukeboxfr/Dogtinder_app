import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";

import SimpleLayout from "../components/templates/SimpleLayout"

import ForgotStyle from "../styles/Forgot"

import { Input, Title, Button, Header } from "../components";

import fr from "../locales/fr.json";

class ForgotNext extends Component {

  onSubmit() {

  }

  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={ForgotStyle.container}>
          <Title>{fr.FORGOT_FORM.TITLE}</Title>
          <View style={{ selfAlign: "center" }}>
            <Input placeholder={fr.FORGOT_FORM.FIELDS.EMAIL} />
          </View>
          <Button
            style={ForgotStyle.submit}
            onPress={() => this.onSubmit()}>{fr.FORGOT_FORM.BUTTONS.SUBMIT}
          </Button>
        </View>
      </SimpleLayout>
    )
  }

}
export default ForgotNext;
