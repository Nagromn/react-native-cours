import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";

// export const ManagedButton = () => {
//   return (
//     <View>
//       <Text>this text will display the current status</Text>
//       <Pressable onPress="">
//         <Text>Press here to check/uncheck</Text>
//       </Pressable>
//     </View>
//   );
// };

// export const ManagedButton = () => {
//   const [checkedState, setCHeckedState] = useState("unchecked");
//   return (
//     <View>
//       <Text>
//         this text will display the current status, which is: {checkedState}
//       </Text>
//       <Pressable onPress={setCheckedState("checked")}>
//         <Text>Press here to check/uncheck</Text>
//       </Pressable>
//     </View>
//   );
// };

export const ManagedButton = () => {
  const [checkedState, setCheckedState] = useState("unchecked");

  const toggleCheckedState = () => {
    setCheckedState((prevState) =>
      prevState === "unchecked" ? "checked" : "unchecked"
    );
  };

  return (
    <View>
      <Text>
        this text will display the current status, which is: {checkedState}
      </Text>
      <Pressable onPress={toggleCheckedState}>
        <Text>Press here to check/uncheck</Text>
      </Pressable>
    </View>
  );
};
