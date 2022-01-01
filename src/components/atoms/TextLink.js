import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ButtonStyle from "../../styles/buttons";

const TextLink = (props) => {

  const { style, innerStyle, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[ButtonStyle.A, innerStyle]}>{props.children}</Text>
    </TouchableOpacity>
  )
}

export default TextLink;
