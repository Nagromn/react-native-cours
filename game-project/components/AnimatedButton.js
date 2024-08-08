import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

export default function AnimatedButton({ action, onPress }) {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="lightblue"
      style={[
        styles.button,
        action === "higher" ? styles.buttonGreen : styles.buttonRed,
      ]}
    >
      <Text style={styles.buttonText}>{action}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 15,
    padding: 30,
    marginVertical: 15,
  },
  buttonRed: {
    backgroundColor: "red",
  },
  buttonGreen: {
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    textTransform: "capitalize",
  },
});
