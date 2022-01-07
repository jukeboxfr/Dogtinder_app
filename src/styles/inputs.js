import { StyleSheet } from 'react-native';
import Colors from "./Colors"

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
    "justifyContent": "space-between"
  },

  "codeInputValue": {
    "backgroundColor": "#fff",
    "borderColor": "#B3B3B3",
    "borderWidth": 2,
    "borderRadius": 4,
    "flex": 1,
    "margin": 5,
    "padding": 10
  },

  "codeInputText": {
    "fontFamily": "Roboto",
    "alignSelf": "center"
  },

  "codeInputValueFocused": {
    "borderColor": Colors.primary
  },


  "codeInputHidden": {
    "position": "absolute",
    "height": 0,
    "width": 0,
    "opacity": 0
  },

  "SelectList": {
      "flex": 1,
      "flexDirection": "column"
  },

  "ListItem": {
    "marginTop": 20,
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },

  "TextList": {
    "color": Colors.grey,
    "fontSize": 30,
  }


})
