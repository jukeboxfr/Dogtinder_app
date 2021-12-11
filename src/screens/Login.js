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

const Link = (props) => {
  return (
    <Text style={{ textDecorationLine: "underline", fontWeight: "bold" }}>
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
    <View style={styles.welcome}>
      <Text style={styles.welcomeText}>En te connectant, tu acceptes nos <Link>Conditions
        générales.</Link> Pour en savoir plus sur l'usage
        que nous faisons de tes données, consultez notre
        <Link> Politique de confidentialité</Link> et notre <Link>Politique
        en matières de Cookies.</Link></Text>
    </View>
  )
}


const LoginIn = (props) => {
  return (
    <View style={styles.socialButton}>
      <TouchableOpacity style={styles.button}>
        {props.icon}
        <Text style={styles.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )
}

const ForgotButton = (props) => {
  return (
    <View style={styles.loginItem}>
      <TouchableOpacity style={styles.forgotButton}>
        <Text style={styles.forgotButtonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  )

}

const SocialsButtons = (props) => {
  return (
    <View style={styles.socials}>
      <LoginIn icon={GoogleIcon()}>connexion avec google</LoginIn>
      <LoginIn icon={FacebookIcon()}>connexion avec facsebook</LoginIn>
      <LoginIn icon={PhoneIcon()}>connexion avec un numéro</LoginIn>
    </View>
  )
}

export default function App() {
  return (
    <Background>
        <View style={styles.login}>
          <Login />
          <SocialsButtons />
          <ForgotButton>Problème de connexion?</ForgotButton>
        </View>
      </Background>
  );
}

const styles = StyleSheet.create({

  login: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },

  loginItem: {
    flex: 1
  },

  socialButton: {

  },

  socials: {
    marginTop: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap"
  },

  welcome: {
    marginTop: 180,
    padding: 30
  },

  welcomeText: {
    color: "#FFFFFF",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4
  },


  forgotButton: {

  },

  forgotButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 4,
    fontWeight: "bold"
  },

  button: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    width: 300,
    padding: 15,
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
