import React from "react";
import { Image } from 'react-native';

const Icon = (props) => {
  return (
    <Image style={{height: 35, width: 35}} source={props.source} />
  )
}

export default Icon
