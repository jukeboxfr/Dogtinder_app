import { StyleSheet, Dimensions } from 'react-native';
import Colors from "./Colors"
import Layout from "./Layout";

const dimensions = Dimensions.get("window")
const windowWidth = dimensions.width
const windowHeight = dimensions.height


const headerWidth = dimensions.width;
const headerHeight = dimensions.height * 0.5;

const headerImageWidth = headerWidth * 2;
const headerImageHeight = headerHeight * 2;

const container = {
  backgroundColor: Colors.white,
  ...Layout.container
}

const header = {
  width: headerWidth,
  height: headerHeight,
  overflow: "hidden",
  relative: "relative"
}

const headerImage = {
  width: "200%",
  height: "200%",
  transform: [
    { translateX: (headerWidth * -0.50) },
    { translateY: (headerHeight * -1) }
  ],
  backgroundColor: Colors.primary,
  borderBottomLeftRadius: headerWidth,
  borderBottomRightRadius: headerWidth,
  overflow: "hidden"
}

const backgroundImage = {
  top: (headerHeight - 100),
  position: "relative",
  flex: 1,
  bottom: 0
}

const closeButton = {
  top: -50,
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  padding: 20,
  borderRadius: headerWidth,
  backgroundColor: "white",
  shadowColor: Colors.grey,
  shadowOffset: { width: 0, height: 0 },
  shadowRadius: 6,
  shadowOpacity: 0.2,
  elevation: 40
}


const body = {
  top: -50,
  padding: 30
}

export default {
  header,
  headerImage,
  backgroundImage,

  closeButton,
  body
}
