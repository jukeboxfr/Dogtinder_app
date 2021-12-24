import Layout from "./Layout";
import Colors from "./colors";

const text = {
  color: Colors.onPrimary
}

const SocialBtn = {
  margin: 10,
  width: 300
}

const innerSocialBtn = {
  fontSize: 15,
  fontWeight: "bold"
}

const buttonsContainer = {
  ...Layout.colsCenter
}

const facebookBtn = { ...SocialBtn, backgroundColor: Colors.facebook }
const googleBtn   = { ...SocialBtn, backgoundColor: Colors.google }
const phoneBtn    = { ...SocialBtn, backgroundColor: Colors.phone }

const innerFacebookBtn = { ...innerSocialBtn, color: Colors.grey }
const innerGoogleBtn   = { ...innerSocialBtn, color: Colors.grey }
const innerPhoneBtn    = { ...innerSocialBtn, color: Colors.grey }

const textLink             = {
  textShadowOffset: { width: 0, height: 3 },
  textShadowRadius: 6,
  textShadowColor: "#000",
  textTransform: "capitalize"
}

export default {
  facebookBtn, innerFacebookBtn,
  googleBtn, innerGoogleBtn,
  phoneBtn, innerPhoneBtn,

  buttonsContainer,
  textLink,
}
