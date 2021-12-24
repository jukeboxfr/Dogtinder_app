import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import styles from "../../styles/Layout";

import Header from "./Header";

export default class SimpleLayout extends Component {

  render() {

    return (
    <View style={styles.container}>
      <Header navigation={this.props.navigation} />
      {this.props.children}
    </View>
  )
  }
}
