
import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Layout from "./Layout"

const container = {
  ...(Layout.getContainerWithPadding(20))
}

const menu = {
  width: "100%",
  backgroundColor: "blue",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  shadowColor: "black",
  shadowOffset: { width: 1, height: 20 },
  shadowOpacity: 1,
  shadowRadius: 20,
  elevation: 3,
  marginTop: "auto"
}

const menuItem = {

}

const menuIcon = {

}


const toggleSwitch = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#E6E6E6",
  borderRadius: 35,
  paddingTop: 5,
  paddingBottom: 5,
  paddingLeft: 10,
  paddingRight: 40,
  width: 200,
  height: 80
}

const toggleSwitchButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3},
  shadowRadius: 4.65,
  shadowOpacity: 0.27,
  elevation: 30,
  borderRadius: 35,
  flex: 0.8,
  height: 60
}

const card = {
  flex: 0.7,
  width: 340,
  marginTop: 20
}

const imageCard = {
  borderRadius: 35
}

const buttons = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
}

const roundButton = {
  backgroundColor: "white"
}

const leftButton = {
  ...roundButton,
}

const rightbutton = {
  ...roundButton,
}

const innerButton = {
  backgroundColor: "white"
}

export default StyleSheet.create({

  container,

  card,
  imageCard,

  menu,
  menuItem,
  menuIcon,

  toggleSwitch,
  toggleSwitchButton,

  buttons,
  leftButton,
  rightButton,
  innerButton
})
