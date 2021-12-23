import React, { useState, Component } from "react";
import { ImageBackground, View, Text } from 'react-native';

import LoginStyle from "../styles/Login";

import ButtonIcon from "../components/atoms/ButtonIcon";
import A from "../components/atoms/A";
import Icon from "../components/atoms/Icon";

import fr from "../locales/fr.json";


const backgroundUrl = require("../../assets/images/background/login_background.png");


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
      <ImageBackground style={LoginStyle.container} resizeMode="cover" source={backgroundUrl}>

        <View style={LoginStyle.login}>

          <Text style={LoginStyle.welcomeText}>{fr.LOGIN.TEXT}</Text>

          <View style={LoginStyle.buttons}>
            <ButtonIcon
              style={LoginStyle.googleButton}
              innerStyle={LoginStyle.innerGoogleButton}
              icon={GoogleIcon}>{fr.LOGIN.BUTTONS.LOGIN_GOOGLE}
            </ButtonIcon>
            <ButtonIcon
              style={LoginStyle.facebookButton}
              innerStyle={LoginStyle.innerFacebookButton}
              icon={FacebookIcon}>{fr.LOGIN.BUTTONS.LOGIN_FACEBOOK}
            </ButtonIcon>
            <ButtonIcon
              onPress={() => this.onPressLogin()}
              style={LoginStyle.phoneButton}
              innerStyle={LoginStyle.innerPhoneButton}
              icon={PhoneIcon}>{fr.LOGIN.BUTTONS.LOGIN_PHONE}
            </ButtonIcon>
          </View>
          <A
            onPress={() => this.onPressForgot()}
            innerStyle={LoginStyle.innerForgot}>{fr.LOGIN.BUTTONS.FORGOT}
          </A>
        </View>

      </ImageBackground>
    )
  }
}

export default Login;
