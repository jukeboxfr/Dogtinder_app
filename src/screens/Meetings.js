import React, { useState, Component } from "react";
import { View, TouchableOpacity, Image, ImageBackground, Text } from "react-native";

import { UserLayout, ToggleSwitch, Button } from "../components";
import styles from "../styles/UserLayout"

const SampleImage = require("../../assets/images/sample/0.jpg")

const HeartImage = require("../../assets/images/swip_images/heart.png")
const CrossImage = require("../../assets/images/swip_images/cross.png")

const Meetings = (props) => {

  const [value, onValueChange] = useState(true)


  return (
    <UserLayout navigation={props.navigation}>
      <ToggleSwitch value={value} onValueChange={onValueChange} />

      <ImageBackground imageStyle={styles.imageCard} style={styles.card} source={SampleImage}>
        <View style={styles.description}>
        </View>
      </ImageBackground>

      <View style={styles.buttons}>
        <Button style={styles.leftButton} innerStyle={styles.innerButton} round>
            <Image style={{ width: 30.85, height: 30.85 }} source={CrossImage} />
        </Button>
        <Button style={styles.rightButton} round>
          <Image style={{ width: 36, height: 31 }} innerStyle={styles.innerButton} source={HeartImage} />
        </Button>
      </View>

    </UserLayout>
  )
}

export default Meetings
