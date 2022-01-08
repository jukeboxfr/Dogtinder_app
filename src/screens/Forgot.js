import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";

import styles from "../styles/SimpleLayout"

import { Title, Button, Header, SimpleLayout } from "../components";

import fr from "../locales/fr.json";

class Forgot extends Component {

  onPressForgot() {
    this.props.navigation.navigate("ForgotPassword");
  }

  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={styles.container}>
          <Title>{fr.FORGOT.TITLE}</Title>
          <Text style={styles.text}>{fr.FORGOT.TEXT}</Text>
          <View style={styles.buttons}>
            <Button style={styles.submit} onPress={() => this.onPressForgot()}>{fr.FORGOT.BUTTONS.SUBMIT}</Button>
          </View>
        </View>
      </SimpleLayout>
    )
  }

}
export default Forgot;
