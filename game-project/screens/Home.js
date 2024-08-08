import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import {
  GestureHandlerRootView,
  LongPressGestureHandler,
  TapGestureHandler,
  State,
} from "react-native-gesture-handler";

export default function Home() {
  const navigation = useNavigation();

  function onLongPress(e) {
    if (e.nativeEvent.state === State.ACTIVE) {
      navigation.navigate("Game");
    }
  }

  function onTap(e) {
    if (e.nativeEvent.state === State.ACTIVE) {
      Alert.alert("Long press to start the game");
    }
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TapGestureHandler onHandlerStateChange={onTap}>
          <LongPressGestureHandler
            onHandlerStateChange={onLongPress}
            minDurationMs={600}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start game!</Text>
            </View>
          </LongPressGestureHandler>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 300,
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 150,
    backgroundColor: "purple",
  },
  buttonText: {
    color: "white",
    fontSize: 48,
  },
});
