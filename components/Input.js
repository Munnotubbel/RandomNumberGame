import React from "react";
import { TextInput, StyleSheet } from "react-native";

export const Input = props => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.inputField, ...props.style }}
      placeholder={props.inputPlaceHolder}
    />
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 1,

    marginVertical: 10
  }
});

export default Input;
