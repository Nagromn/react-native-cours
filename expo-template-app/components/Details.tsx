import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesParams } from "../router";

type Props = NativeStackScreenProps<RoutesParams, "Details">;

export default function Settings({ route, navigation }: Props) {
  const { title, stock, content } = route.params;

  React.useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} />
      <Text>
        {content} and stock is {stock}
      </Text>
    </View>
  );
}
