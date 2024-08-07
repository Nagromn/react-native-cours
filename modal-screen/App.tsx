// import React, { useState } from "react";
// import { Alert, View, Text } from "react-native";
// import styles from "./styles";
// import ConfirmationModal from "./ConfirmationModal";
// import ErrorModal from "./ErrorModal";

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);

//   function toggleModal() {
//     setModalVisible(!modalVisible);
//   }

//   // function toggleAlert() {
//   //   Alert.alert("Are you sure ?", "For real ?", [
//   //     { text: "Nope", onPress: () => {} },
//   //     { text: "Yep", onPress: () => {} },
//   //   ]);
//   // }

//   function toggleAlert() {
//     Alert.alert("", "Failed to do the thing...", [{ text: "Dismiss" }]);
//   }

//   return (
//     <View style={styles.container}>
//       {/* <ConfirmationModal
//         animationType="fade"
//         visible={modalVisible}
//         onPressConfirm={toggleModal}
//         onPressCancel={toggleModal}
//       />
//       <Text style={styles.text} onPress={toggleModal}>
//         Show Confirmation Modal
//       </Text>
//       <Text style={styles.text} onPress={toggleAlert}>
//         Show Confirmation Alert
//       </Text> */}

//       <ErrorModal
//         animationType="fade"
//         visible={modalVisible}
//         onPressConfirm={toggleModal}
//         onPressCancel={toggleModal}
//       />
//       <Text style={styles.text} onPress={toggleModal}>
//         Show Error Modal
//       </Text>
//       <Text style={styles.text} onPress={toggleAlert}>
//         Show Error Alert
//       </Text>
//     </View>
//   );
// }

// import React from "react";
// import styles from "./styles";
// import { View, Text } from "react-native";
// import { RootSiblingParent } from "react-native-root-siblings";
// import Toast from "react-native-root-toast";

// export default function PassiveNotifications() {
//   return (
//     <RootSiblingParent>
//       <View style={styles.container}>
//         <Text
//           onPress={() => {
//             Toast.show("Something happened!", {
//               duration: Toast.durations.LONG,
//             });
//           }}
//         >
//           Show Notification
//         </Text>
//       </View>
//     </RootSiblingParent>
//   );
// }

// import React, { useState } from "react";
// import styles from "./styles";
// import { View, Text } from "react-native";
// import Activity from "./Activity";

// export default function App() {
//   const [fetching, setFetching] = useState(false);
//   const [promise, setPromise] = useState(Promise.resolve());

//   function onPress() {
//     setPromise(
//       new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
//         setFetching(false);
//       })
//     );
//     setFetching(true);
//   }

//   return (
//     <View style={styles.container}>
//       <Activity visible={fetching} />
//       <Text onPress={onPress}>Fetch Stuff...</Text>
//     </View>
//   );
// }

// import { useState } from "react";
// import { Button, View } from "react-native";
// import styles from "./styles";
// import { TodoItem, Todo } from "./TodoItem";

// export default function App() {
//   const [todoList, setTodoList] = useState<Todo[]>([]);

//   const addTask = () => {
//     setTodoList([
//       ...todoList,
//       { id: String(new Date().getTime()), title: "New task" },
//     ]);
//   };

//   const deleteTask = (id: string) => {
//     setTodoList(todoList.filter((todo) => todo.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 1 }}>
//         {todoList.map(({ id, title }) => (
//           <TodoItem key={id} id={id} title={title} onPress={deleteTask} />
//         ))}
//       </View>
//       <Button onPress={addTask} title="Add" />
//     </View>
//   );
// }

import React from "react";
import styles from "./styles";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Pressable, View, Text } from "react-native";

export default function App() {
  const radius = useSharedValue(30);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const color = useSharedValue(0);

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(color.value, [0, 1], ["orange", "red"]);
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      borderRadius: radius.value,
      transform: [{ scale: scale.value }],
      backgroundColor: backgroundColor.value,
    };
  }, []);

  const onPressIn = () => {
    radius.value = withSpring(20);
    opacity.value = withSpring(0.7);
    scale.value = withSpring(0.9);
  };

  const onLongPress = () => {
    scale.value = withSpring(0.8);
    color.value = withSpring(1);
  };

  const onPressOut = () => {
    radius.value = withSpring(30);
    opacity.value = withSpring(1);
    scale.value = withSpring(1, { damping: 50 });
    color.value = withSpring(0);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.buttonContainer, animatedStyles]}>
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onLongPress={onLongPress}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Press me</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}
