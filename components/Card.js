import React from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  //spread action, takes all existing styles out of local styles and overwrites them with styles out of the props
  //so i can ez give the cards some dimensions and positioning
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,

    backgroundColor: "white",

    //shadow just works on IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 10,

    //elevation does same for ANDROID
    elevation: 10
  }
});

export default Card;
