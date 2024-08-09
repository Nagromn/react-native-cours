// // import * as React from "react";
// // import { useEffect, useState } from "react";
// // import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
// // import styles from "./styles";
// // import { View, Text } from "react-native";

// // const connectedMap = {
// //   none: "Disconnected",
// //   unknown: "Disconnected",
// //   cellular: "Connected",
// //   wifi: "Connected",
// //   bluetooth: "Connected",
// //   ethernet: "Connected",
// //   wimax: "Connected",
// //   other: "Connected",
// // } as const;

// // export default function App() {
// //   const [connected, setConnected] = useState("");

// //   useEffect(() => {
// //     function onNetworkChange(connection: NetInfoState) {
// //       const type = connection.type;
// //       setConnected(connectedMap[type]);
// //     }

// //     const unsubscribe = NetInfo.addEventListener(onNetworkChange);

// //     return () => {
// //       unsubscribe();
// //     };
// //   }, []);

// //   return (
// //     <View style={styles.container}>
// //       <Text>{connected}</Text>
// //     </View>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import styles from "./styles";
// import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { TextInput, Text, View, FlatList } from "react-native";
// import Button from "./Button";

// export default function App() {
//   const [key, setKey] = useState("");
//   const [value, setValue] = useState("");
//   const [source, setSource] = useState<KeyValuePair[]>([]);

//   function setItem() {
//     return AsyncStorage.setItem(key, value)
//       .then(() => {
//         setKey("");
//         setValue("");
//       })
//       .then(loadItems);
//   }

//   function clearItems() {
//     return AsyncStorage.clear().then(loadItems);
//   }

//   async function loadItems() {
//     const keys = await AsyncStorage.getAllKeys();
//     const values = await AsyncStorage.multiGet(keys);
//     setSource([...values]);
//   }

//   useEffect(() => {
//     loadItems();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text>Key</Text>
//       <TextInput
//         style={styles.input}
//         value={key}
//         onChangeText={(v) => {
//           setKey(v);
//         }}
//       />
//       <Text>Value</Text>
//       <TextInput
//         style={styles.input}
//         value={value}
//         onChangeText={(v) => {
//           setValue(v);
//         }}
//       />
//       <View style={styles.controls}>
//         <Button label="Add" onPress={setItem} />
//         <Button label="Clear" onPress={clearItems} />
//       </View>
//       <View style={styles.list}>
//         <FlatList
//           data={source.map(([key, value]) => ({
//             key: key.toString(),
//             value,
//           }))}
//           renderItem={({ item: { value, key } }) => (
//             <Text>
//               {value} ({key})
//             </Text>
//           )}
//         />
//       </View>
//     </View>
//   );
// }

import React, { useEffect, useState } from "react";
import styles from "./styles";
import { set, get, Key } from "./store";
import NetInfo from "@react-native-community/netinfo";
import { Switch, Text, View } from "react-native";

export default function App() {
  const [message, setMessage] = useState<string | null>(null);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const setters = new Map([
    ["first", setFirst],
    ["second", setSecond],
    ["third", setThird],
  ]);

  function save(key: Key) {
    return (value: boolean) => {
      set(key, value).then(
        (connected) => {
          setters.get(key)?.(value);
          setMessage(connected ? null : "Saved Offline");
        },
        (err) => {
          setMessage(err);
        }
      );
    };
  }

  useEffect(() => {
    NetInfo.fetch().then(() =>
      get().then(
        (items) => {
          for (let [key, value] of Object.entries(items)) {
            setters.get(key)?.(value);
          }
        },
        (err) => setMessage(err)
      )
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <View>
        <Text>First</Text>
        <Switch value={first} onValueChange={save("first")} />
      </View>
      <View>
        <Text>Second</Text>
        <Switch value={second} onValueChange={save("second")} />
      </View>
      <View>
        <Text>Third</Text>
        <Switch value={third} onValueChange={save("third")} />
      </View>
    </View>
  );
}
