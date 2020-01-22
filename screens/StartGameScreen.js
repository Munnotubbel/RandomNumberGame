import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

export const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = inputText => {
    //replaces all input Values globaly that are not a number from 0-9 with an empty String
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const confirmInputHandler = () => {
    //i can set the number after reset because everything is getting handled in batch and resets after re rendering
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number! ",
        "Number has to be a Number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    } else {
      setConfirmed(true);
      setEnteredValue("");
      setSelectedNumber(parseInt(enteredValue));
      Keyboard.dismiss();
    }
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          color={Colors.primary}
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.headline}>Start a New Game</Text>
        <Card style={styles.inputWrapper}>
          {/* <View style={styles.inputWrapper}> */}
          <Text>Select a Number</Text>
          <Input
            onChangeText={numberInputHandler}
            inputPlaceHolder="number"
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
          />
          <View style={styles.buttonWrapper}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title="RESET"
                onPress={resetInputHandler}
              />
            </View>
            {/* <View style={styles.button}>
            <Button title="NEW" onPress={() => {}} />
          </View> */}
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title="CONFIRM"
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  headline: {
    fontSize: 18,
    fontWeight: "700"
  },

  inputWrapper: {
    alignItems: "center",

    width: 300,
    maxWidth: "80%"
  },
  buttonWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    width: "35%",
    padding: 2
  },
  input: { width: 50, textAlign: "center" },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartGameScreen;
