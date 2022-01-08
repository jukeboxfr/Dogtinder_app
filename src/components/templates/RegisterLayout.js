import React, { useState, Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";

import styles from "../../styles/RegisterLayout"


export default class RegisterLayout extends Component {

  onCloseButton() {
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.headerImage}>
            <ImageBackground style={styles.backgroundImage} resizeMode="contain" source={require("../../../assets/images/background/header_background.png")} />
          </View>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={() => this.onCloseButton()}>
          <Image style={{ height: 35, width: 35 }} source={require("../../../assets/images/icons/close.png")} />
        </TouchableOpacity>

        <View style={styles.body}>
          {this.props.children}
        </View>

      </View>
    )
  }
}
