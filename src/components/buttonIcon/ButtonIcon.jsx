import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./buttonIcon.style";
import { colors } from "../../constants/colors";

export default function ButtonIcon({ title, onPress, icon, color }) {
  const buttonTextColor = color ? color : colors.white;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={buttonTextColor} />
      <Text style={[styles.text, { color: buttonTextColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}
