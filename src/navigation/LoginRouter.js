import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../screens/Login";
import Register from "../screens/Register";
import Forgot   from "../screens/Forgot";
import ForgotNext from "../screens/ForgotNext";
import Validation from "../screens/Validation"

const Stack = createStackNavigator()
const LoginRouter = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot"   component={Forgot} />
      <Stack.Screen name="ForgotNext" component={Validation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginRouter;
