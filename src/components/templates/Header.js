import React, { Component } from "react";
import { TouchableOpacity, Image, View, StyleSheet, StatusBar } from "react-native";
import Button from "../atoms/Button";

var styles = {
  header: {
    marginTop: StatusBar.currentHeight * 2,
    marginLeft: 20
  },
  backButton: {
    backgroundColor: "white",
    width: 55,
    height: 55,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9
  },
  backButtonIcon: {
    width: 30,
    height: 30
  }
};



styles = StyleSheet.create(styles)

const Header = props => {

  const { navigation } = props;


  return (
    <View style={styles.header}>
      <Button round style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backButtonIcon}
          source={require("../../../assets/images/icons/arrow-left.png")} />
      </Button>
    </View>
  )
}

export default Header;
