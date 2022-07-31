import React from "react";
import { View, TouchableOpacity, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./home.style";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../../constants/colors";
import { BgImage } from "../../components";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <BgImage />
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.chatButton}
      >
        <FontAwesome name="wechat" size={24} color={colors.lightGray} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
