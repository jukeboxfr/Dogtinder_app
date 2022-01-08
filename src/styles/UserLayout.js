
import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Layout from "./Layout"

const container = {
  backgroundColor: "#FFF3F3",
  ...(Layout.getContainerWithPadding(20))
}

const withShadow = {
  shadowOffset: {
    width: 1,
    height: -3
  },
  shadowColor: "#D3D3D3",
  shadowOpacity: 1,
  shadowRadius: 20,
  elevation: 5
}

const menu = {
  marginTop: "auto",
  padding: 10,
  width: 200,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  ...withShadow
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
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 4.65,
  shadowOpacity: 0.27,
  elevation: 30,
  borderRadius: 35,
  flex: 0.8,
  height: 60
}

const card = {
  flex: 0.8,
  flexDirection: "column-reverse",
  width: 340,
  marginTop: 20,
  alignItems: "center",

}

const imageCard = {
  borderRadius: 35,
}


const buttons = {
  marginTop: 20,
  display: "flex",
  flexDirection: "row",
  width: 200,
  justifyContent: "space-between",
  alignItems: "center"
}

const roundButton = {
  backgroundColor: "white"
}

const leftButton = {
  ...roundButton,
}

const rightButton = {
  ...roundButton,
}

const innerButton = {
  backgroundColor: "white"
}

const descCard = {
  backgroundColor: "white",
  width: 250,
  height: 100,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 20
}


const descWrapperCard = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
}

const descNameCard = {
  fontSize: 20
}

const descNameAge = {
  fontSize: 20
}

const descLocation = {
  fontSize: 12
}


const avatarImage = {
  width: 40,
  height: 40
}

const avatarImageStyle = {
  borderRadius: 20
}

const boxWithShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 2.62,
  overflow: "hidden",
  shadowOpacity: 0.23,
  elevation: 4,
  borderRadius: 9
}


const chatBox = {
  backgroundColor: "white",
  padding: 20,
  width: 400,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  ...boxWithShadow
}

const chatDesc = {
    marginLeft: 20,
    display: "flex",
    flexDirection: "column"
}

const chatName = {
  fontWeight: "bold",
  fontSize: 14
}

const chatMessage = {
  fontSize: 12
}

export default StyleSheet.create({

  chatBox,
  chatDesc,
  chatName,
  chatMessage,

  avatarImage,
  avatarImageStyle,

  container,

  card,
  imageCard,
  descCard,

  descWrapperCard,
  descNameCard,
  descNameAge,
  descLocation,

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
