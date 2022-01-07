import { StatusBar } from "react-native";
import Colors from "./Colors";

const container = {
  marginTop: StatusBar.currentHeight,

  flex: 1,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "Roboto"
}

const getContainerWithPadding = (padding) =>
  ({ ...container, padding })

const colsCenter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap"
}

const textCenter = {
  textAlign: "center"
}

const backButton = {
  backgroundColor: Colors.white,
  width: 55,
  height: 55,
  shadowCalor: Colors.grey,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9
}

const backButtonIcon = { width: 30, height: 30 }

export default {
  container,

  colsCenter,
  textCenter,

  backButton,
  backButtonIcon,

  getContainerWithPadding
}
