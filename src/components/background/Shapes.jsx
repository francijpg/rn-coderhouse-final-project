import React from "react";
import { Image, StyleSheet, View } from "react-native";
import BgImage from "./BgImage";

const Background = () => {
  return (
    <>
      <BgImage />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "purple",
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          top: 120,
          position: "absolute",
          transform: [{ rotate: "45deg" }],
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          bottom: 120,
          position: "absolute",
          borderRadius: 50,
          transform: [{ rotate: "50deg" }],
        }}
      ></View>
    </>
  );
};

export default Background;
