import React from "react";
import { View } from "react-native";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore"
import LoginRouter from "./navigation/LoginRouter"


const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginRouter style={{ backgroundColor: "white" }} />
      </Provider>)
  }
}

registerRootComponent(App);
