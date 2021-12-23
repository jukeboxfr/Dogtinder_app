import { StyleSheet, Dimensions } from 'react-native';
import Colors from "./colors";
import Typography from "./typography"

const dimensions = Dimensions.get("window")

const styles = {};

styles.base = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: 20
}

styles.withShadow = {
  shadowOffset: { width: 3, height: 6 },
  shadowRadius: 5,
  elevation: 2
}

styles.withRounded = {
  borderRadius: 33
}

styles.focus = {

}

styles.active = {

}

styles.primary = {
  backgroundColor: Colors.primary
}

const A = {}
A.textAlign = "center";
A.fontWeight = "bold";
A.color = "#FFFFFF";


styles.A = A;

styles.defaultButton = {
  ...styles.base,
  ...styles.withShadow,
  ...styles.withRounded,
  ...styles.primary
}


styles.iconButton = {
  ...styles.defaultButton,
  justifyContent: "space-between"
}

styles.buttonIcon = {
  ...styles.defaultButton,
}

styles.innerButton = {
  color: Colors.onPrimary,
  textAlign: "center"
}


styles.roundButton = {
  ...styles.base,
  ...styles.withShadow,
  borderRadius: 100
}

styles.innerButtonIcon = {}
styles.innerButtonIcon.marginLeft = "auto";


export default StyleSheet.create(styles);
