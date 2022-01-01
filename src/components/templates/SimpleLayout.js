import React, { Component } from "react";
import { Image, View } from "react-native";

import styles from "../../styles/SimpleLayout";
import  Button  from "../../components/atoms/Button";

export default class SimpleLayout extends Component {

  render() {

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Button round style={styles.goBackButton} onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.goBackIcon}
              source={require("../../../assets/images/icons/arrow-left.png")} />
          </Button>
        </View>

        <View style={styles.body}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
