import React from "react";
import { View, TouchableOpacity, CheckBox, Image, Text } from "react-native";
import styles from "../../styles/UserLayout"


const StarOn = <Image style={{ width: 29, height: 28 }} source={require("../../../assets/images/switch_icons/star_on.png")} />
const StarOff = <Image style={{ width: 29, height: 28 }} source={require("../../../assets/images/switch_icons/star_off.png")} />
const HeartOn = <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/switch_icons/heart_on.png")} />
const HeartOff = <Image style={{ width: 30, height: 30 }} source={require("../../../assets/images/switch_icons/heart_off.png")} />

const ToggleSwitchItem = (props) => {
  const [ ImageOn, ImageOff ] = props.images;
  const toggleSwitchStyle = props.isSelected ? styles.toggleSwitchButton : {};
  const image             = props.isSelected ? ImageOn : ImageOff;

  return (
    <View style={toggleSwitchStyle} onPress={props.ontoggleSwitch}>
      {image}
    </View>
  )
}

const ToggleSwitch = (props) => {

  const { value, onValueChange } = props;

  return (
    <TouchableOpacity onPress={onValueChange} style={styles.toggleSwitch}>
      <ToggleSwitchItem isSelected={value} images={[HeartOn, HeartOff]} />
      <ToggleSwitchItem isSelected={!value} images={[StarOn, StarOff]}  />
    </TouchableOpacity>
  )
}

export default ToggleSwitch;
