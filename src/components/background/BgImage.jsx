import React from "react";
import { Image, StyleSheet } from "react-native";

import { styles } from "./background.style";

const BgImage = () => {
  return (
    <Image
      source={require("../../assets/images/background.jpg")}
      style={[styles.image, StyleSheet.absoluteFill]}
    />
  );
};

export default BgImage;
