import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";

import { auth, signIn, createUser } from "../services/firebase";

import Shapes from "../components/background/Shapes";
import { styles } from "./auth.style";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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

  const handleCreateAccount = () => {
    createUser(auth, email, password)
      .then((userCredential) => {
        console.log("Account created!");
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleSignIn = () => {
    signIn(auth, email, password)
      .then((userCredential) => {
        console.log("Signed in!");
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerAuth = () => {
    isLogin ? handleSignIn() : handleCreateAccount(); // TODO dispatch action
  };

  const handleChangeAuth = () => {
    setIsLogin(!isLogin);
    console.log("login changed", isLogin);
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
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                E-mail
              </Text>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder="example@gmail.com"
              />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Password
              </Text>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder="password"
                secureTextEntry={true}
              />
            </View>
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

export default LoginScreen;
