import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    width: 350,
    height: 500,
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  blurView: {
    borderRadius: 20,
    overflow: "hidden",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
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
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderColor: colors.white,
    borderWidth: 1,
  },
  text: {
    fontSize: 17,
    fontWeight: "400",
    color: colors.white,
  },
  textWithoutAccount: {
    fontSize: 14,
    color: colors.white,
    marginTop: 20,
  },
  btnWithoutAccount: {
    fontSize: 14,
    // fontFamily: "Lato-Bold",
    color: colors.white,
    textAlign: "center",
  },
});
