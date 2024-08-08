import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, StatusBar, View, Text } from "react-native";
import AnimatedButton from "../components/AnimatedButton";

export default function Game() {
  const [choice, setChoice] = useState("");
  const [baseNumber, setBaseNumber] = useState(null);
  const [score, setScore] = useState(null);

  console.log(`beginning base Number = ${baseNumber} et score = ${score}`);

  const navigation = useNavigation();

  useEffect(() => {
    const initBaseNumber = Math.floor(Math.random() * 100);
    const initScore = Math.floor(Math.random() * 100);
    setBaseNumber(initBaseNumber);
    setScore(initScore);
    console.log(
      `useEffect initialization base number = ${initBaseNumber} et score ${initScore}`
    );
  }, []);

  useEffect(() => {
    if (choice && baseNumber !== null && score !== null) {
      console.log(`base Number = ${baseNumber} et score = ${score}`);
      const winner =
        (choice === "higher" && score > baseNumber) ||
        (choice === "lower" && baseNumber > score);
      navigation.navigate("Result", { winner, baseNumber, score });
    }
  }, [choice]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.baseNumber}> Starting: {baseNumber}</Text>
      <AnimatedButton action="higher" onPress={() => setChoice("higher")} />
      <AnimatedButton action="lower" onPress={() => setChoice("lower")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  baseNumber: {
    fontSize: 48,
    marginBottom: 30,
  },
});
