import { Button, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text>Settings Screen</Text>

      <Link href="/" asChild>
        <Button title="Home" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
