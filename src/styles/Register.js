import { StyleSheet, Dimensions } from 'react-native';
import Colors from "./colors"

const dimensions = Dimensions.get("window")
const windowWidth = dimensions.width
const windowHeight = dimensions.height


const headerWidth = dimensions.width;
const headerHeight = dimensions.height * 0.5;

const headerImageWidth = headerWidth * 2;
const headerImageHeight = headerHeight * 2;

export default StyleSheet.create({
  "container": {
    "backgroundColor": "#fff",
    "flex": 1,
    "padding": 0,
    "display": "flex",
    "flexDirection": "column",
    "fontFamily": "Roboto"
  },
  "header": {
    "width": headerWidth,
    "height": headerHeight,
    "overflow": "hidden",
    "position": "relative"
  },
  "headerImage": {
    "width": "200%",
    "height": "200%",
    "transform": [
      {
        "translateX": (headerWidth * -0.50)
      },
      {
        "translateY": (headerHeight * - 1)
      }
    ],
    "backgroundColor": Colors.primary,
    "borderBottomLeftRadius": headerWidth,
    "borderBottomRightRadius": headerWidth,
    "overflow": "hidden"
  },
  "backgroundImage": {
    "top": (headerHeight - 100),
    "position": "relative",
    "flex": 1,
    "bottom": 0
  },
  "closeButton": {
    "top": -50,
    "alignSelf": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "padding": 20,
    "borderRadius": headerWidth,
    "backgroundColor": "white",
    "shadowColor": "#000000",
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "shadowOpacity": 0.2,
    "elevation": 40
  },
  "submit": {
    "top": 10
  },
  "registerForm": {
    "top": -50,
    "padding": 30
  }
})
