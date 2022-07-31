import React from "react";
import { View, Text } from "react-native";
import { styles } from "./label.styles";

const Label = ({ children, style, label }) => {
  return (
    <View>
      <Text style={[styles.label, style]}>{label}</Text>
      {children}
    </View>
  );
};

export default Label;
