import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fr from "../locales/fr.json";

import { changePhoneNumber } from "../actions/register";
import { Title, Button, NumberInput, RegisterLayout } from "../components";
import styles from "../styles/LoginLayout";


class Register extends Component {

  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: {
        country: this.props.phoneNumber.country,
        code: this.props.phoneNumber.code,
        number: this.props.phoneNumber.number
      }
    }
  }

  onPressContinue() {
    this.props.actions.changePhoneNumber(this.state.phoneNumber)
    this.props.navigation.navigate("PhoneValidation")
  }

  onChangeNumberCode(phoneNumber) {


    this.setState({
      phoneNumber: {
        country: phoneNumber._country,
        code: phoneNumber.code,
        number: this.state.phoneNumber.number
      }
    })
  }

  onChangeNumberPhone(number) {
    this.setState({
      phoneNumber: {
        country: this.state.phoneNumber._country,
        code: this.state.phoneNumber.code,
        number
      }
    })
  }

  onPressNumberCode() {
    this.props.navigation.navigate("SelectList", {
      list: fr.COUNTRIES,
      onGoBack: this.onChangeNumberCode.bind(this)
    })
  }

  render() {
    const navigation = this.props.navigation;
    console.log("render", this.state.phoneNumber)
    return (
      <RegisterLayout navigation={navigation}>
        <Title>{fr.PHONE_LOGIN.TITLE}</Title>
        <NumberInput onPressNumberCode={this.onPressNumberCode.bind(this)} onChangeNumberPhone={this.onChangeNumberPhone.bind(this)} value={this.state.phoneNumber} />
        <Text style={styles.registerText}>{fr.PHONE_LOGIN.TEXT}</Text>
        <Button onPress={this.onPressContinue.bind(this)} style={styles.submitBtn}>{fr.PHONE_LOGIN.BUTTONS.CONTINUE}</Button>
      </RegisterLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
