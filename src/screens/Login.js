import React, { useState, Component } from "react";
import { ImageBackground, View, Text } from 'react-native';

import styles from "../styles/LoginLayout";

import { ButtonIcon, A, Icon } from "../components";


import fr from "../locales/fr.json";


const BACKGROUND_IMAGE = require("../../assets/images/background/login_background.png");


const GoogleIcon = <Icon source={require("../../assets/images/icons/google.png")} />
const FacebookIcon = <Icon source={require("../../assets/images/icons/facebook.png")} />
const PhoneIcon = <Icon source={require("../../assets/images/icons/phone.png")} />

class Login extends Component {

  onPressLogin() {
    this.props.navigation.navigate("Register");
  }

  onPressForgot() {
    this.props.navigation.navigate("Forgot");
  }

  render() {
    return (
      <ImageBackground style={styles.container} resizeMode="cover" source={BACKGROUND_IMAGE}>
        <View style={styles.login}>
          <Text style={styles.welcomeText}>{fr.LOGIN.TEXT}</Text>
          <View style={styles.buttons}>
            <ButtonIcon style={styles.googleBtn} innerStyle={styles.innerGoogleBtn} icon={GoogleIcon}>{fr.LOGIN.BUTTONS.LOGIN_GOOGLE}</ButtonIcon>
            <ButtonIcon style={styles.facebookBtn} innerStyle={styles.innerFacebookBtn} icon={FacebookIcon}>{fr.LOGIN.BUTTONS.LOGIN_FACEBOOK}</ButtonIcon>
            <ButtonIcon onPress={() => this.onPressLogin()} style={styles.phoneBtn} innerStyle={styles.innerPhoneBtn} icon={PhoneIcon}>{fr.LOGIN.BUTTONS.LOGIN_PHONE}</ButtonIcon>
          </View>
          <A onPress={() => this.onPressForgot()} innerStyle={styles.innerForgot}>{fr.LOGIN.BUTTONS.FORGOT}</A>
        </View>
      </ImageBackground>
    )
  }
}

export default Login;
