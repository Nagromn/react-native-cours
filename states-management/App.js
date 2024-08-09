import React from "react";
import { StyleSheet, View } from "react-native";
import { ManagedButton } from "./ManagedButton";
import { ParentComponent, LikesParentComponent } from "./ParentComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ManagedButton /> */}
      {/* <ParentComponent /> */}
      <LikesParentComponent />
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
});
