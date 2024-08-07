import { View, Text } from "react-native";
import { DatePickerProps } from "./DatePickerProps";
import styles from "./styles";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

export default function DatePicker({
  label,
  value,
  onChange,
}: DatePickerProps) {
  return (
    <View style={styles.datePickerContainer}>
      <Text style={styles.datePickerLabel}>{label}</Text>
      <Text
        onPress={() =>
          DateTimePickerAndroid.open({
            value: value,
            mode: "date",
            is24Hour: true,
            onChange: (event, date) => {
              if (event.type === "set" && date) {
                onChange(date);
              }
            },
          })
        }
      >
        {value.toLocaleDateString()}
      </Text>
    </View>
  );
}
