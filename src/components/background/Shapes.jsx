import React from "react";
import { View } from "react-native";
import { colors } from "../../constants/colors";
import BgImage from "./BgImage";

const Background = () => {
  return (
    <>
      <BgImage />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: colors.primary,
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: colors.primary,
          top: 120,
          position: "absolute",
          transform: [{ rotate: "45deg" }],
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: colors.primary,
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
