import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "expo-app-loading";

import navigationTheme from "./app/assets/Navigation/navigationTheme";
import AppNavigator from "./app/assets/Navigation/AppNavigator";
import AuthNavigator from "./app/assets/Navigation/AuthNavigator";
import AuthContext from "./app/assets/auth/context";
import authStorage from "./app/assets/auth/storage";

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
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
