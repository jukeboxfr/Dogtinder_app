import { StyleSheet } from 'react-native';
import Colors from "./colors"

export default StyleSheet.create({
  "form": {
    "display": "flex",
    "flexDirection": "row",
    "overflow": "hidden",
    "margin": 10
  },
  "countryCheckList": {
    "flex": 0.5,
    "display": "flex",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottomColor": Colors.primary,
    "borderBottomWidth": 2,
    "color": "#E5A3A9",
    "padding": 30
  },
  "countryInput": {
    "flex": 1,
    "textAlign": "center",
    "color": "#E5A3A9",
    "fontSize": 15
  },
  "checkListIcon": {
    "width": 25,
    "height": 16
  },
  "digitsInput": {
    "flex": 1,
    "marginLeft": 10,
    "borderBottomColor": Colors.primary,
    "borderBottomWidth": 2,
    "color": "#E5A3A9",
    "fontSize": 15,
    "textAlign": "center"
  },
  "baseInput": {
    "borderBottomColor": Colors.primary,
    "borderBottomWidth": 2,
    "color": "black",
    "fontSize": 15,
    "textAlign": "center"
  },



  "codeInputContainer": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },

  "codeInputValues": {
    "height": 60,
    "width": "100%",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },

  "codeInputValue": {
    "backgroundColor": "#fff",
    "borderColor": "#B3B3B3",
    "borderWidth": 1,
    "borderRadius": 4,
    "width": 50,
    "padding": 20
  },

  "codeInputText": {
    "fontFamily": "Roboto"
  },

  "codeInputValueFocused": {
    "borderColor": Colors.primary
  },


  "codeInputHidden": {
    "position": "absolute",
    "height": 0,
    "width": 0,
    "opacity": 0
  }





})
