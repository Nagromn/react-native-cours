import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./src/surfaces/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { ConversationsNavigation } from "./src/surfaces/ConversationsNavigation";
import { Home } from "./src/surfaces/Home";
import { requestBase } from "./src/utils/constants";
import { UserListContext } from "./src/context";
import { store } from "./store";
import { Provider } from "react-redux";
import { UserDetailsModal } from "./src/surfaces/UserDetailsModal";
import { ImageDetailsModal } from "./src/surfaces/ImageDetailsModal";
import Loading from "./src/components/Loading";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  async function fetchUserData(id) {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !userList) {
    const loadingMessage = !fontsLoaded
      ? "Loading fonts..."
      : "Loading userList...";

    return <Loading message={loadingMessage} />;
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <UserListContext.Provider value={{ userList: userList }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Group>
                {!userLoggedIn ? (
                  <Stack.Screen name="Login" component={Login} />
                ) : (
                  <>
                    {/* <Stack.Screen name="Home" options={{ headerShown: false }}>
                      {(props) => <Home {...props} userList={userList} />}
                    </Stack.Screen> */}
                    <Stack.Screen
                      name="Home"
                      component={Home}
                      options={{ headerShown: false }}
                    />
                    <Stack.Screen
                      name="ConversationsNav"
                      component={ConversationsNavigation}
                      options={{ headerShown: false }}
                    />
                  </>
                )}
              </Stack.Group>
              <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen
                  name="UserDetailsModal"
                  component={UserDetailsModal}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ImageDetailsModal"
                  component={ImageDetailsModal}
                  options={{ headerShown: false }}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </UserListContext.Provider>
      </Provider>
    </SafeAreaProvider>
  );
}
