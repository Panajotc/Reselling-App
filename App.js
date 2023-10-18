import React, { useEffect, useState } from "react";
import Screen from "./app/assets/components/Screen";
import { Button, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import jwtDecode from "jwt-decode";
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import navigationTheme from "./app/assets/Navigation/navigationTheme";
import AppNavigator from "./app/assets/Navigation/AppNavigator";
import AuthNavigator from "./app/assets/Navigation/AuthNavigator";
import AuthContext from "./app/assets/auth/context";
import authStorage from "./app/assets/auth/storage";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.error("App loading error:", error)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
