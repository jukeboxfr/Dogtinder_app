import React, { useState, Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";

import ButtonStyle from "../../styles/buttons";




class Button extends Component {


  constructor(props) {
    super(props);

    this.buttonStyle = ButtonStyle.defaultButton;
  }

  render() {

    if (this.props.round) {
      this.buttonStyle = ButtonStyle.roundButton;
    }

    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress} style={[this.buttonStyle, this.props.style]}>
          {this.props.round ? this.props.children :
          <Text style={[ButtonStyle.innerButton, this.props.innerStyle]}>{this.props.children}</Text>}
        </TouchableOpacity>
      </View>
    )
  }

}



export default Button;
