import { StyleSheet } from "react-native";
import Layout from "./Layout";
import Colors from "./colors";

const container =  {
  ...Layout.getContainerWithPadding(20),
  backgroundColor: Colors.primary
}

const buttonsContainer = { ...Layout.colsCenter, marginTop: 100 }

const SocialBtn = { margin: 10, width: 300 }

const facebookBtn = { ...SocialBtn, backgroundColor: Colors.facebook }
const googleBtn   = { ...SocialBtn, backgroundColor: Colors.google }
const phoneBtn    = { ...SocialBtn, backgroundColor: Colors.phone }

const innerBtn = { fontSize: 15, fontWeight: "bold" }

const innerFacebookBtn = { ...innerBtn, color: Colors.white }
const innerGoogleBtn   = { ...innerBtn, color: Colors.grey }
const innerPhoneBtn    = { ...innerBtn, color: Colors.white }

const submitBtn      = { margin: 10, width: 300, backgroundColor: Colors.green, alignSelf: "center" }
const innerSubmitBtn = { ...innerBtn, color: Colors.white }


const landingText = { color: Colors.onPrimary, ...Layout.textCenter }

const forgotLink             = {
  ...landingText,
  textShadowOffset: { width: 0, height: 3 },
  textShadowRadius: 6,
  textShadowColor: "#000",
  textTransform: "capitalize"
}

const registerText            = {
  padding: 10,
  color: Colors.grey
}

export default StyleSheet.create({
  facebookBtn, innerFacebookBtn,
  googleBtn, innerGoogleBtn,
  phoneBtn, innerPhoneBtn,

  submitBtn,
  innerSubmitBtn,

  login: Layout.colsCenter,

  container,
  buttonsContainer,

  landingText,
  registerText,
  forgotLink,


})
