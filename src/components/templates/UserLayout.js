import React, { Component } from "react";
import { Image, Text, View } from "react-native";

import Menu from "../organisms/Menu"

import styles from "../../styles/UserLayout";

const ProfileIcon = require("../../../assets/images/menu_icons/profile.png")
const ChatIcon = require("../../../assets/images/menu_icons/chat.png")
const FinderIcon = require("../../../assets/images/menu_icons/finder.png")

const items = [
  { name: "Profil", icon: ProfileIcon },
  { name: "Chat", icon: ChatIcon },
  { name: "Meetings", icon: FinderIcon }
]


export default class UserLayout extends Component {


  onPressMenu(name) {
    this.props.navigation.navigate(name);
  }

  render() {

    return (
      <View style={styles.container}>
        {this.props.children}
  
        <Menu items={items} onPress={this.onPressMenu.bind(this)} />
      </View>
    )
  }
}
