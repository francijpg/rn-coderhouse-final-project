import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../screens/auth/Auth";

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "pop",
      }}
    >
      <Auth.Screen name="Auth" component={AuthScreen} />
    </Auth.Navigator>
  );
};

export default AuthStack;
