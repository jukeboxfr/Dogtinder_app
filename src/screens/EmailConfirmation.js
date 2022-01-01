import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Input, Title, Button, SimpleLayout } from "../components";

import styles from "../styles/SimpleLayout";

import fr from "../locales/fr.json";

export default class EmailConfirmation extends Component {


  render() {
    return (
      <SimpleLayout navigation={this.props.navigation}>
        <Title>{fr.MAIL.TITLE}</Title>
        <Text>{fr.MAIL.TEXT}</Text>
        <View>
          <Input placeholder={fr.MAIL.FIELDS.EMAIL} />
        </View>
        <View>
          <Button
            style={{ width: "100%" }}
            onPress={() => this.onPressForgot()}>{fr.VALIDATION.BUTTONS.CONTINUE}
          </Button>
          <Text>{fr.MAIL.OR}</Text>
          <Button
            style={{ width: "100%" }}
            onPress={() => this.onPressForgot()}>{fr.VALIDATION.BUTTONS.CONTINUE}
          </Button>
        </View>
      </SimpleLayout>
    )
  }
}
