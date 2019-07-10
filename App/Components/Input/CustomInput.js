import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./Styles/CustomInputStyles";
import { Colors } from "../../Themes";

export default class CustomInput extends Component {
  render() {
    const { placeholder, secureTextEntry, onChangeText, value } = this.props;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={Colors.orange}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
  }
}
