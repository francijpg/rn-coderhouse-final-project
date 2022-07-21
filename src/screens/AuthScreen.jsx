import React from "react";
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { signIn, signUp } from "../store/actions/auth.actions";
import { onInputChange, onFocusOut } from "../utils/forms";
import { initialState, FormReducer } from "../store/reducers/form.reducer";

import { styles } from "./auth.style";
import { colors } from "../constants/colors";

import Shapes from "../components/background/Shapes";
import { Input } from "../components/index";

const AuthScreen = () => {
  const [formState, dispatchFormState] = React.useReducer(
    FormReducer,
    initialState
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = React.useState(true);
  const title = isLogin ? "LogIn" : "Create Account";
  const message = isLogin
    ? "Don't you have an account?"
    : "Do you have an account?";
  const messageAction = isLogin ? "Register" : "Login";
  const bgBtnLogin = isLogin
    ? { backgroundColor: "#00CFEB90" }
    : { backgroundColor: "#6792F090" };

  const profilePicture = "https://randomuser.me/api/portraits/women/32.jpg";

  const handlerAuth = () => {
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
    // const userId = useSelector((state) => state.auth.userId);
    // userId && navigation.navigate("Home");
    // TODO: improve the way to navigate to Home
    navigation.navigate("Home");
  };

  const handleChangeAuth = () => {
    setIsLogin(!isLogin);
  };

  const onHandleChange = (text, type) => {
    onInputChange(type, text, dispatchFormState, formState);
  };

  const onBlurInput = (text, type) => {
    onFocusOut(type, text, dispatchFormState, formState);
  };

  return (
    <View style={styles.container}>
      <Shapes />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={100} style={styles.blurView}>
          <View style={styles.login}>
            <Image
              source={{ uri: profilePicture }}
              style={styles.profilePicture}
            />
            <Input
              placeholder="example@gmail.com"
              placeholderTextColor={colors.text}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => onHandleChange(text, "email")}
              onBlur={(e) => onBlurInput(e.nativeEvent.text, "email")}
              value={formState.email.value}
              hasError={formState.email.hasError}
              error={formState.email.error}
              touched={formState.email.touched}
              label="Email"
            />
            <Input
              placeholder="********"
              placeholderTextColor={colors.text}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => onHandleChange(text, "password")}
              onBlur={(e) => onBlurInput(e.nativeEvent.text, "password")}
              value={formState.password.value}
              hasError={formState.password.hasError}
              error={formState.password.error}
              touched={formState.password.touched}
              label="Password"
            />
            <TouchableOpacity
              onPress={handlerAuth}
              style={[styles.button, bgBtnLogin]}
            >
              <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            <Text style={styles.textWithoutAccount}>{message}</Text>
            <TouchableOpacity onPress={handleChangeAuth}>
              <Text style={styles.btnWithoutAccount}>{messageAction}</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default AuthScreen;
