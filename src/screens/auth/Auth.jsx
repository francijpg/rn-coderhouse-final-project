import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { useDispatch, useSelector } from "react-redux";

import {
  signIn,
  signUp,
  hideAuthError,
} from "../../store/actions/auth.actions";
import { onInputChange, onFocusOut } from "../../utils/forms";
import { initialState, formReducer } from "../../store/reducers/form.reducer";

import { colors } from "../../constants/colors";
import { styles } from "./auth.style";

import { Shapes, Input } from "../../components";

const AuthScreen = () => {
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    initialState
  );
  const dispatch = useDispatch();
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
  const auth = useSelector((state) => state.auth);

  const handlerAuth = () => {
    dispatch(
      isLogin
        ? signIn(formState.email.value, formState.password.value)
        : signUp(formState.email.value, formState.password.value)
    );
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

  const handleAuthMessage = () => {
    dispatch(hideAuthError());
  };

  if (auth.authError !== null) {
    Alert.alert(
      "Error",
      auth.authError,
      [{ text: "OK", onPress: handleAuthMessage }],
      { cancelable: false }
    );
  }

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
              onEndEditing={(e) => onBlurInput(e.nativeEvent.text, "email")}
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
              onEndEditing={(e) => onBlurInput(e.nativeEvent.text, "password")}
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
