import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/Home";
import ChatScreen from "../screens/chat/Chat";

const Main = createNativeStackNavigator();

const mainConfig = {
  headerShown: false,
  // headerTitleAlign: "center",
  // presentation: "modal",
  // animationEnabled: true,
  // gestureEnabled: true, //Defaults to true on iOS, false on Android.
  // animationTypeForReplace: "push", //The type of animation to use when this screen replaces another screen
  // keyboardHandlingEnabled: true, //the keyboard will NOT automatically dismiss when navigating to a new screen from this screen. Defaults to true.
};

const MainStack = () => {
  return (
    <Main.Navigator screenOptions={mainConfig}>
      <Main.Screen name="HomeStack" component={HomeScreen} />
      <Main.Screen name="Chat" component={ChatScreen} />
    </Main.Navigator>
  );
};

export default MainStack;
