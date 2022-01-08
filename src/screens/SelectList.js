import React, { Component } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { SimpleLayout } from "../components";

import styles from "../styles/inputs";


export default class SelectList extends Component {


  onPress(phoneNumber) {
    this.props.route.params.onGoBack(phoneNumber)
    this.props.navigation.goBack();
  }

  render() {
    const list = this.props.route.params.list;

    return (
      <SimpleLayout navigation={this.props.navigation}>
        <View style={styles.SelectList}>
          {list.map((item, key) => {

            return (
              <TouchableOpacity style={styles.ListItem} onPress={this.onPress.bind(this, item)} key={key}>
                {Object.keys(item)
                  .filter((field) => field[0] != '_')
                  .map((field, key) =>
                    <Text style={styles.TextList} key={key}>{item[field]}</Text>)}
              </TouchableOpacity>
            )
          })}
        </View>
      </SimpleLayout>)
  }
}
