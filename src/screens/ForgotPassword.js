import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Input, Title, Button, Header, SimpleLayout } from "../components";

import styles from "../styles/SimpleLayout"

import fr from "../locales/fr.json";

class ForgotPassword extends Component {

  onSubmit() {

  }

  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={styles.container}>
          <Title>{fr.FORGOT_FORM.TITLE}</Title>
          <View>
            <Input placeholder={fr.FORGOT_FORM.FIELDS.EMAIL} />
            <Text style={styles.label}>{fr.FORGOT_FORM.LABEL}</Text>
          </View>
          <View style={styles.buttons}>
            <Button style={styles.submit} onPress={() => this.onSubmit()}>{fr.FORGOT_FORM.BUTTONS.SUBMIT}</Button>
          </View>

        </View>
      </SimpleLayout>
    )
  }

}
export default ForgotPassword;
