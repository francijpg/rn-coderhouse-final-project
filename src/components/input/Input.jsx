import React from "react";
import { View, Text, TextInput } from "react-native";
import Label from "../label/Label";
import { styles } from "./input.style";

const Input = ({
  editable,
  children,
  value,
  onChangeText,
  onFocus,
  onBlur,
  maxLegth,
  placeholder,
  placeholderTextColor,
  keyboardType,
  hasError,
  error,
  touched,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Label {...props}>
        <TextInput
          {...props}
          style={styles.input}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          maxLength={maxLegth}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
        />
      </Label>
      {hasError && touched && (
        <View style={styles.message}>
          <Text style={styles.helperText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
