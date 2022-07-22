import React from "react";
import { ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import store from "./src/store";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  const [loaded] = useFonts({
    "Lato-Regular": require("./src/assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./src/assets/fonts/Lato-Bold.ttf"),
    "Lato-Italic": require("./src/assets/fonts/Lato-Italic.ttf"),
    "Lato-BoldItalic": require("./src/assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Light": require("./src/assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("./src/assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Black": require("./src/assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("./src/assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Thin": require("./src/assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("./src/assets/fonts/Lato-ThinItalic.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
