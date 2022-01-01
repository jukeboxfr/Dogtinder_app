import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changePhoneNumber } from "../actions/register";
import SimpleLayout from "../components/templates/SimpleLayout"
import styles from "../styles/SimpleLayout"
import buttonsStyle from "../styles/buttons";

import { CodeInput, Title, Button, Header } from "../components";

import fr from "../locales/fr.json";

class Validation extends Component {

  onPressForgot() {
    this.props.navigation.navigate("EmailConfirmation");
  }

  render() {

    return (
      <SimpleLayout navigation={this.props.navigation}>
        <Title style={{ marginRight: "auto" }}>{fr.VALIDATION.TITLE}</Title>

        <View style={styles.buttons}>
          <Text>({this.props.phoneNumber.country} {this.props.phoneNumber.code}) {this.props.phoneNumber.number}</Text>
          <Button style={buttonsStyle.miniButton} innerStyle={buttonsStyle.innerMiniButton}>{fr.VALIDATION.BUTTONS.RESEND}</Button>
        </View>

        <View style={styles.body}>
          <CodeInput length={4} />
          <Text style={styles.label}>{fr.FORGOT_FORM.LABEL}</Text>
        </View>

        <View style={styles.buttons}>
          <Button
            style={{ width: "100%" }}
            onPress={() => this.onPressForgot()}>{fr.VALIDATION.BUTTONS.CONTINUE}
          </Button>
        </View>
      </SimpleLayout>
    )
  }
}

const ActionCreators = { changePhoneNumber }

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch)
})

const mapStateToProps = state => ({
  phoneNumber: state.register.phoneNumber
})

export default connect(mapStateToProps, mapDispatchToProps)(Validation);
