// import React, { useState } from "react";
// import { Text, View, TextInputProps, TextInput } from "react-native";
// import styles from "./styles";
// import Select from "./Select.android";

// type InputProps = TextInputProps & {
//   label: string;
// };

// function Input(props: InputProps) {
//   return (
//     <View style={styles.textInputContainer}>
//       <Text style={styles.textInputLabel}>{props.label}</Text>
//       <TextInput style={styles.textInput} {...props} />
//     </View>
//   );
// }

// export default function CollectingTextInput() {
//   const [changedText, setChangedText] = useState("");
//   const [submittedText, setSubmittedText] = useState("");

//   return (
//     <View style={styles.container}>
//       <Input label="Basic Text Input" />
//       <Input label="Password Input" secureTextEntry />
//       <Input label="Return Key" returnKeyType="search" />
//       <Input label="Placeholder Text" placeholder="Search" />
//       <Input
//         label="Input Events"
//         onChangeText={(e) => {
//           setChangedText(e);
//         }}
//         onSubmitEditing={(e) => {
//           setSubmittedText(e.nativeEvent.text);
//         }}
//         onFocus={() => {
//           setChangedText("");
//           setSubmittedText("");
//         }}
//       />
//       <Text>Changed: {changedText}</Text>
//       <Text>Submitted: {submittedText}</Text>
//     </View>
//   );
// }

// const sizes = [
//   { label: "", value: null },
//   { label: "S", value: "S" },
//   { label: "M", value: "M" },
//   { label: "L", value: "L" },
//   { label: "XL", value: "XL" },
// ];

// const garments = [
//   { label: "", value: null, sizes: ["S", "M", "L", "XL"] },
//   { label: "Socks", value: 1, sizes: ["S", "L"] },
//   { label: "Shirt", value: 2, sizes: ["M", "XL"] },
//   { label: "Pants", value: 3, sizes: ["S", "L"] },
//   { label: "Hat", value: 4, sizes: ["M", "XL"] },
// ];

// export default function SelectingOptions() {
//   const [availableGarments, setAvailableGarments] = useState<typeof garments>(
//     []
//   );
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [selectedGarment, setSelectedGarment] = useState<number | null>(null);

//   return (
//     <View style={styles.container}>
//       <View style={styles.pickersBlock}>
//         <Select
//           label="Size"
//           items={sizes}
//           selectedValue={selectedSize}
//           onValueChange={(size: string) => {
//             setSelectedSize(size);
//             setSelectedGarment(null);
//             setAvailableGarments(
//               garments.filter((i) => i.sizes.includes(size))
//             );
//           }}
//         />
//         <Select
//           label="Garment"
//           items={availableGarments}
//           selectedValue={selectedGarment}
//           onValueChange={(garment: number) => {
//             setSelectedGarment(garment);
//           }}
//         />
//       </View>
//       <Text style={styles.selection}>
//         {selectedSize &&
//           selectedGarment &&
//           `${selectedSize} ${
//             garments.find((i) => i.value === selectedGarment)?.label
//           }`}
//       </Text>
//     </View>
//   );
// }

// import React, { useState } from "react";
// import { View } from "react-native";
// import styles from "./styles";
// import Switch from "./Switch";

// export default function TogglingOnAndOff() {
//   const [first, setFirst] = useState(false);
//   const [second, setSecond] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Switch
//         label="Disable Next Switch"
//         value={first}
//         disabled={second}
//         onValueChange={setFirst}
//       />
//       <Switch
//         label="Disable Previous Switch"
//         value={second}
//         disabled={first}
//         onValueChange={setSecond}
//       />
//     </View>
//   );
// }

import React, { useState } from "react";
import { View } from "react-native";
import DatePicker from "./DatePicker.android";
import TimePicker from "./TimePicker.android";
import styles from "./styles";

export default function CollectingDateTimeInput() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        label="Pick a date, any date:"
        value={date}
        onChange={setDate}
      />
      <TimePicker
        label="Pick a time, any time:"
        value={time}
        onChange={setTime}
      />
    </View>
  );
}
