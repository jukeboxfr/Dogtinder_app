import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";

import SimpleLayout from "../components/templates/SimpleLayout"


import ValidationStyle from "../styles/Validation"

import CodeInput from "../components/atoms/CodeInput"
import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button"
import Header from "../components/templates/Header";

import fr from "../locales/fr.json";

const styles = StyleSheet.create({

  forgotTitle: {
    textAlign: "left",
    marginBottom: 10
  },

  forgotButton: {
    marginLeft: 30,
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#707070",
    borderWidth: 2,
    color: "#000"
  },

  forgotButtonText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#000"
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },

  form: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  formText: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 12,
    color: "#707070"
  },

  formSubmit: {
    marginTop: 200
  }


})

class Validation extends Component {

  onPressForgot() {
    this.props.navigation.navigate("");
  }

  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={ValidationStyle.container}>
          <Title style={styles.forgotTitle}>{fr.VALIDATION.TITLE}</Title>

          <View style={styles.buttons}>
            <Text>0768501670</Text>
            <Button style={styles.forgotButton} innerStyle={styles.forgotButtonText}>{fr.VALIDATION.BUTTONS.RESEND}</Button>
          </View>

          <View style={styles.form}>
            <CodeInput length={4} />
            <Text style={styles.formText}>Nous allons t'envoyer un lien pour te connecter.</Text>


          </View>

          <Button
            style={styles.formSubmit}
            onPress={() => this.onPressForgot()}>{fr.VALIDATION.BUTTONS.CONTINUE}
          </Button>
        </View>
      </SimpleLayout>
    )
  }

}
export default Validation;
