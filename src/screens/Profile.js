import React, { Component, useState } from "react";
import { View, TouchableOpacity, Image, ImageBackground, Text } from "react-native";

import { UserLayout } from "../components";
import styles from "../styles/UserLayout"

const Profile = (props) => {

  const [value, onValueChange] = useState(true)


  return (
    <UserLayout navigation={props.navigation}>
    </UserLayout>
  )
}

export default Profile
