import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";

import { Title, Button, NumberInput } from "../components";

import fr from "../locales/fr.json";

import RegisterStyle from "../styles/Register";

const CloseButton = (props) => {

  const onPress = () =>
    props.navigation.goBack();

  return (
    <TouchableOpacity style={RegisterStyle.closeButton} onPress={onPress}>
      <Image style={{ height: 35, width: 35 }} source={require("../../assets/images/home_cross.png")}>
      </Image>
    </TouchableOpacity>
  )
}


const Header = (props) => {
  return (
    <View style={RegisterStyle.header}>
      <View style={RegisterStyle.headerImage}>
        <ImageBackground style={RegisterStyle.backgroundImage} resizeMode="contain" source={require("../../assets/images/background/header_background.png")}>
          {props.children}
        </ImageBackground>
      </View>
    </View>
  )
}

class RegisterForm extends Component {

  render() {
    return (
      <View style={RegisterStyle.registerForm}>
        <Title style={RegisterStyle.registerTitle}>{fr.PHONE_LOGIN.TITLE}</Title>
        <NumberInput placeholder="7 68 50 16 70" />
        <Text>{fr.PHONE_LOGIN.TEXT}</Text>
        <Button style={RegisterStyle.submit}>Continuer</Button>
      </View>
    )
  }
}

class Register extends Component {


  render() {
    return (
      <View style={RegisterStyle.container}>
        <Header />
        <CloseButton navigation={this.props.navigation} />
        <RegisterForm />
      </View>
    )
  }
}


export default Register;
