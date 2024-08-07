import React from "react";
import styles from "./styles";
import { ActivityIndicator, Modal, View } from "react-native";

type ActivityProps = {
  visible: boolean;
  size?: "small" | "large";
};

export default function Activity({ visible, size = "large" }: ActivityProps) {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modalContainer}>
        <ActivityIndicator size={size} />
      </View>
    </Modal>
  );
}
