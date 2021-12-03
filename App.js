import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput,
  TouchableOpacity, Image, ImageBackground
} from 'react-native';

import { useFonts } from "expo-font";

const GoogleIcon = () => (
  <Image style={styles.icon} source={require("./assets/icons/google.png")} />
)
const FacebookIcon = () => (
  <Image style={styles.icon} source={require("./assets/icons/facebook.png")} />
)

const PhoneIcon = (props) => (
  <Image style={styles.icon} source={require("./assets/icons/phone.png")} />
)

const Background = (props) => (
  <ImageBackground style={styles.container} resizeMode="cover" source={require("./assets/home_background.png")}>
    {props.children}
  </ImageBackground>
)

const Underline = (props) => {
  return (
    <Text style={{ textDecorationLine: "underline" }}>
      {props.children}
    </Text>
  )
}


const Login = () => {

  const [loaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Black.ttf")
  })

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = mail => setEmail(email)
  const onChangePassword = password => setPassword(password)

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.welcome}>En te connectant, tu acceptes nos <Underline>Conditions
        générales.</Underline> Pour en savoir plus sur l'usage
        que nous faisons de tes données, consultez notre
        <Underline>Politique de confidentialité</Underline> et notre Politique
        en matières de Cookies.</Text>
    </View>
  )
}


const LoginIn = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.button}>
        {props.icon}
        <Text style={styles.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const ForgotButton = (props) => {
  return (
    <View style={{ flex: 1, alignSef: "flex-end" }}>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {
  return (
    <Background>
        <View style={{flex: 1}}>
          <Login />
          <LoginIn icon={GoogleIcon()}>connexions avec google</LoginIn>
          <LoginIn icon={FacebookIcon()}>connexion davec facebook</LoginIn>
          <LoginIn icon={PhoneIcon()}>connexion avec un numéro</LoginIn>
          <ForgotButton>Problème de connexion?</ForgotButton>
        </View>
      </Background>
  );
}

const styles = StyleSheet.create({

  forgotButton: {
    alignSelf: "flex-end"
  },

  forgotButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4

  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    width: 300,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 33,
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 5,
    elevation: 2
  },

  buttonText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#707070",
    fontFamily: "Roboto",
    textTransform: "uppercase"
  },

  welcome: {
    color: "#FFFFFF",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4
  },
  container: {
    backgroundColor: "#FCB4B8",
    flex: 1,
    fontFamily: "Roboto",
    display: "flex",
    flexDirection: "column",
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  },
});
