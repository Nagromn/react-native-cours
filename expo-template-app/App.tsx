// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Platform } from "react-native";
// import Home from "./components/Home";
// import News from "./components/News";
// import Settings from "./components/Settings";
// import { Routes } from "./router";

// const Tab = createBottomTabNavigator<Routes>();
// const Drawer = createDrawerNavigator<Routes>();

// export default function App() {
//   return (
//     <NavigationContainer>
//       {Platform.OS === "ios" && (
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={Home} />
//           <Tab.Screen name="News" component={News} />
//           <Tab.Screen name="Settings" component={Settings} />
//         </Tab.Navigator>
//       )}

//       {Platform.OS === "android" && (
//         <Drawer.Navigator>
//           <Drawer.Screen name="Home" component={Home} />
//           <Drawer.Screen name="News" component={News} />
//           <Drawer.Screen name="Settings" component={Settings} />
//         </Drawer.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }

import { Text, View, FlatList } from "react-native";
import styles from "./styles";
import ListContainer from "./components/ListContainer";

const data = new Array(100)
  .fill(null)
  .map((v, i) => ({ key: i.toString(), value: `Item ${i}` }));

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={data}
        renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
      /> */}
      <ListContainer />
    </View>
  );
}
