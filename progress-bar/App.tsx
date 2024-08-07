// import React from "react";
// import { ActivityIndicator, View } from "react-native";
// import styles from "./styles";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { View } from "react-native";
// import styles from "./styles";
// import ProgressBar from "./ProgressBar";

// export default function MeasuringProgress() {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     let timeoutRef: NodeJS.Timeout | null = null;

//     function updateProgress() {
//       setProgress((currentProgress) => {
//         if (currentProgress < 1) {
//           return currentProgress + 0.01;
//         } else {
//           return 0;
//         }
//       });

//       timeoutRef = setTimeout(updateProgress, 100);
//     }

//     updateProgress();

//     return () => {
//       timeoutRef && clearTimeout(timeoutRef);
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <ProgressBar progress={progress} />
//     </View>
//   );
// }
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./router";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import styles from "./styles";
import { View, Text, Button } from "react-native";
import ProgressBar from "./ProgressBar";

const Stack = createNativeStackNavigator<Routes>();

const routes = [
  { name: "First", component: First },
  { name: "Second", component: Second },
  { name: "Third", component: Third },
  { name: "Fourth", component: Fourth },
] as const;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route, navigation }) => {
          const currentRouteIndex = routes
            .map((r) => r.name)
            .indexOf(route.name);
          const prevRouteName = routes[currentRouteIndex - 1]?.name;
          const nextRouteName = routes[currentRouteIndex + 1]?.name;

          return {
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerTitle: () => (
              <View style={styles.progress}>
                <Text style={styles.title}>{route.name}</Text>
                <ProgressBar progress={route.params.progress} />
              </View>
            ),
            headerLeft: () => (
              <Button
                title="Prev"
                disabled={currentRouteIndex === 0}
                onPress={() => navigation.navigate(prevRouteName)}
              />
            ),
            headerRight: () => (
              <Button
                title="Prev"
                disabled={currentRouteIndex === 3}
                onPress={() => navigation.navigate(nextRouteName)}
              />
            ),
          };
        }}
      >
        {routes.map((routeProps, index) => (
          <Stack.Screen
            key={routeProps.name}
            {...routeProps}
            initialParams={{ progress: (index + 1) / routes.length }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
