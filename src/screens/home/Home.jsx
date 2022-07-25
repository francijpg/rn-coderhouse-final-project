import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { signOut } from "../../store/actions/auth.actions";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // console.log(auth);
  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home Screen</Text>
      <Text>{auth.userId}</Text>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
        <Text>Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
