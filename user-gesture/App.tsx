// import React from "react";
// import {
//   ScrollView,
//   View,
//   Text,
//   ActivityIndicator,
//   Switch,
// } from "react-native";
// import styles from "./styles";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ScrollView style={styles.scroll}>
//         {new Array(20).fill(null).map((v, i) => (
//           <View key={i}>
//             <Text style={[styles.scrollItem, styles.text]}>Some Text</Text>
//             <ActivityIndicator style={styles.scrollItem} size="large" />
//             <Switch style={styles.scrollItem} />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// import React from "react";
// import { View } from "react-native";
// import styles from "./styles";
// import PressableButton from "./PressableButton";
// import { OpacityButton, HighlightButton } from "./Button";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <OpacityButton onPress={() => {}} label="Opacity" />
//       <HighlightButton onPress={() => {}} label="Highlight" />
//       <PressableButton />
//     </View>
//   );
// }

import React, { useState } from "react";
import { View } from "react-native";
import Swipeable from "./Swipeable";
import styles from "./styles";

export default function SwipeableAndCancellable() {
  const [items, setItems] = useState(
    new Array(10).fill(null).map((v, id) => ({ id, name: "Swipe Me" }))
  );

  function onSwipe(id: number) {
    return () => setItems(items.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Swipeable
          key={item.id}
          onSwipe={onSwipe(item.id)}
          name={item.name}
          width={200}
        />
      ))}
    </View>
  );
}
