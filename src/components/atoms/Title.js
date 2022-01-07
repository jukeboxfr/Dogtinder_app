import React from 'react';
import { Text } from 'react-native';

import Typography from "../../styles/Typography"

const Title = (props) => {

  const { style } = props;

  return (
      <Text style={[Typography.title, style]}>{props.children}</Text>
  )
}

export default Title;
