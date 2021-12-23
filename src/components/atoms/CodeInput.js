import React, { createRef, useState, Component } from "react";
import { View, TouchableOpacity, Pressable, TextInput, Text, Image, SafeAreaView } from "react-native";
import styles from "../../styles/inputs";


class CodeInput extends Component {


  constructor(props) {
    super(props);

    this.state = {
      code: "",
      isFocused: false
    }

    this.ref = createRef();
  }

  onChangeText(code) {
    console.log("nouveau code", code)
    this.setState({ code })
  }


  getDigits() {

    const inputStyle = this.state.isFocused;

    const getValue = (_, index) => {

      console.log("GO=>", this.state.code[index], index)
      const digit = this.state.code[index]

      const isEmpty = !digit
      const isCurrent = (index == this.state.code.length)
      const isLast = (index == this.props.length)
      const isFocused = isCurrent || (isLast && isCurent)


      const inputStyle = this.state.isFocused && isFocused
        ? [styles.codeInputValue, styles.codeInputValueFocused]
        : styles.codeInputValue

      if (isFocused)
        console.log(index, digit)
      return (
        <View style={inputStyle} key={index}>
          <Text style={styles.codeInputText}>{digit || ""}</Text>
        </View>
      )
    }



    return Array(this.props.length)
      .fill(0)
      .map(getValue)
  }

  onPress() {
    console.log("ok")
    this.setState({ isFocused: true });
    this.ref.current.focus()
  }

  onSubmitEditing() {
    this.setState({ isFocused: false })
  }

  render() {

    return (
      <View style={styles.codeInputContainer}>
        <Pressable style={styles.codeInputValues} onPress={() => this.onPress()}>
          {this.getDigits()}
        </Pressable>
        <TextInput
          ref={this.ref}
          value={this.state.code}
          onChangeText={(code) => this.onChangeText(code)}
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={() => this.onSubmitEditing()}
          textContentType="oneTimeCode"
          maxLength={this.props.length}
          style={styles.codeInputHidden} />
      </View>
    )
  }
}

export default CodeInput;
