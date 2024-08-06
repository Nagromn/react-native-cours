import { Button, StatusBar, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text>Home Screen</Text>

      <Link href="/settings" asChild>
        <Button title="Settings" />
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
