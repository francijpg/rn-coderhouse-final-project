import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row", // TODO: remove flex dependencies
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
    marginLeft: 10,
  },
});
