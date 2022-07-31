import React from "react";
import { Text, View } from "react-native";
import { styles } from "./settings.style";
import { BgImage } from "../../components";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <BgImage />
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
