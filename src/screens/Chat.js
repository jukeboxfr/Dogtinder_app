import React, { useState, Component } from "react";
import { View, TouchableOpacity, Image, ImageBackground, Text } from "react-native";

import { UserLayout, Title } from "../components";
import styles from "../styles/UserLayout"

const AvatarImage = require("../../assets/images/avatar.png");

const Chat = (props) => {

  const [value, onValueChange] = useState(true)


  return (
    <UserLayout navigation={props.navigation}>
      <Title>Chat</Title>
      <View>

        <TouchableOpacity style={styles.chatBox}>
            <ImageBackground style={styles.avatarImage} imageStyle={styles.avatarImageStyle} source={AvatarImage} />
            <View style={styles.chatDesc}>
              <Text style={styles.chatName}>Princesse Sarah</Text>
              <Text style={styles.chatMessage}>Ne viens surtout pas me dire...</Text>
            </View>
        </TouchableOpacity>

      </View>
    </UserLayout>
  )
}

export default Chat
