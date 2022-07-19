import React from "react";
import { Image, StyleSheet } from "react-native";

import { styles } from "./background.style";

const BgImage = () => {
  const uri = "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg";
  return (
    <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
  );
};

export default BgImage;
