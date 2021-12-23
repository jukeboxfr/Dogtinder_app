import React             from "react";
import {ImageBackground} from 'react-native';


const Login = props => {
  <ImageBackground style={LoginStyle.container} resizeMode="cover" source={require(backgroundUrl)}>
    {props.children}
  </ImageBackground>
}


export default Login;
