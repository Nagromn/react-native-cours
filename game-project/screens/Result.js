import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export default function Result() {
  const route = useRoute();
  const { winner, baseNumber, score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{`You've ${winner ? "won" : "lost"}`}</Text>
      <Text style={styles.details}>
        {`Base number was ${baseNumber} and score ${score}`}
      </Text>
      {winner && (
        <LottieView
          autoPlay
          loop={false}
          style={styles.animation}
          source={require("../assets/winner.json")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  message: {
    fontSize: 48,
  },
  details: {
    fontSize: 24,
    textAlign: "center",
  },
  animation: {
    width: 300,
    height: 300,
  },
});
