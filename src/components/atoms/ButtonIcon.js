import React, { useState, Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import ButtonStyle from "../../styles/buttons";

class ButtonIcon extends Component {

  render() {
    const { style, innerStyle } = this.props;


    return (
        <TouchableOpacity  onPress={this.props.onPress} style={[ButtonStyle.iconButton, style]}>
          {this.props.icon}
          <Text style={[ButtonStyle.text, innerStyle]}>{this.props.children}</Text>
        </TouchableOpacity>
    )
  }
}

export default ButtonIcon;
