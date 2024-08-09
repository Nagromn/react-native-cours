import React from "react";
import styles from "./styles";
import { TouchableOpacity, Text } from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export default function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
