import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  input: {
    // height: 40,
    // // borderBottomColor: colors.primary,
    // borderBottomWidth: 1,
    // width: "90%",
    // // fontFamily: "Lato-Regular",
    // marginBottom: 5,
    width: 250,
    height: 40,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.whiteOpacity,
    marginBottom: 20,
  },
  message: {
    marginVertical: 0,
  },
  helperText: {
    // fontFamily: "Lato-Bold",
    fontSize: 12,
    color: colors.error,
  },
});
