import React from "react";
import { View } from "react-native";
import { registerRootComponent } from "expo";

import LoginRouter from "./navigation/LoginRouter"

class App extends React.Component {
  render() {
    return <LoginRouter style={{backgroundColor: "white"}} />
  }
}

registerRootComponent(App);
