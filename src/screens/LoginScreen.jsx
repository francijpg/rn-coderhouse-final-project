import React from "react";
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { BlurView } from "expo-blur";

import { useNavigation } from "@react-navigation/native";

import { auth, signIn, createUser } from "../config/firebase";

import { styles } from "./login.style";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation();

  const uri = "https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg";
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

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "purple",
          position: "absolute",
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "blue",
          top: 120,
          position: "absolute",
          transform: [{ rotate: "25deg" }],
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          bottom: 120,
          position: "absolute",
          borderRadius: 50,
          transform: [{ rotate: "50deg" }],
        }}
      ></View>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BlurView intensity={100}>
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
              onPress={handleSignIn}
              style={[styles.button, { backgroundColor: "#00CFEB90" }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCreateAccount}
              style={[styles.button, { backgroundColor: "#6792F090" }]}
            >
              <Text style={{ fontSize: 17, fontWeight: "400", color: "white" }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
