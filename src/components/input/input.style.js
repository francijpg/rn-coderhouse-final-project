import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  input: {
    fontFamily: "Lato-Regular",
    width: 250,
    height: 40,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.whiteOpacity,
    marginBottom: 10,
  },
  message: {
    marginVertical: 0,
    marginBottom: 10,
  },
  helperText: {
    fontFamily: "Lato-Bold",
    fontSize: 12,
    color: colors.error,
  },
});
