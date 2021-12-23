import { StyleSheet } from 'react-native';
import Colors from "./colors";

export default StyleSheet.create({
  "login": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "space-between",
    "padding": 20,
    "marginTop": "auto"
  },
  "container": {
    "backgroundColor": Colors.primary,
    "flex": 1,
    "padding": 0,
    "display": "flex",
    "flexDirection": "column-reverse",
    "alignItems": "center",
    "justifyContent": "center",
    "fontFamily": "Roboto"
  },
  "buttons": {
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "flexWrap": "wrap"
  },
  "button": {
    "margin": 10
  },
  "facebookButton": {
    "margin": 10,
    "width": 300,
    "shadowColor": "#000",
    "backgroundColor": "#57A5F3"
  },
  "googleButton": {
    "margin": 10,
    "width": 300,
    "shadowColor": "#000",
    "backgroundColor": "#F5F5F5",
    "color": "#707070"
  },
  "phoneButton": {
    "margin": 10,
    "width": 300,
    "shadowColor": "#000",
    "backgroundColor": "#2B292A",
    "color": "white"
  },
  "innerGoogleButton": {
    "fontSize": 15,
    "color": "#707070",
    "fontWeight": "bold"
  },
  "innerFacebookButton": {
    "fontSize": 15,
    "color": "#FFFFFF",
    "fontWeight": "bold"
  },
  "innerPhoneButton": {
    "fontSize": 15,
    "color": "#ffffff",
    "fontWeight": "bold"
  },
  "innerForgot": {
    "textShadowOffset": {
      "width": 0,
      "height": 3
    },
    "textShadowRadius": 6,
    "textShadowColor": "#000",
    "textTransform": "capitalize"
  },
  "welcomeText": {
    "color": Colors.onPrimary,
    "marginBottom": 100,
    "padding": 20
  }
});
