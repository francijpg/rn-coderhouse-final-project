import React from "react";
import { View, Text } from "react-native";
import { styles } from "./label.styles";

const Label = ({ children, style, label, subLabel, subLabelStyle }) => {
  return (
    <View>
      <Text style={[styles.label, style]}>{label}</Text>
      {children}
      {subLabel && (
        <Text style={[styles.subLabel, subLabelStyle]}>{subLabel}</Text> // TODO remove unnecessary styles
      )}
    </View>
  );
};

export default Label;
