import { StyleSheet, View, StatusBar } from "react-native";
import Colors from "./Colors";
import Layout from "./Layout"

const container = {
  backgroundColor: Colors.white,
  marginTop: StatusBar.currentHeight,
  flex: 1,
}


const header = {
  margin: 20
}

const goBackButton = {
  backgroundColor: Colors.white,
  width: 55,
  height: 55,
  shadowColor: Colors.grey,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9
}

const goBackIcon = { width: 30, height: 30 }

const body = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  padding: 50,
  paddingTop: 0
}

const buttons = {
  marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"

}

const label = {
  fontSize: 12,
  color: Colors.grey,
  textAlign:  "center"
}


export default StyleSheet.create({
  container,
  header,
  body,
  goBackButton,
  goBackIcon,
  buttons,
  label
})
