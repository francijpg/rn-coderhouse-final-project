import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../constants/colors";
import MainStack from "./MainStack";
import SettingsStack from "./SettingsStack";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={MainStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("Home")}>
              <FontAwesome
                name="home"
                size={25}
                color={colors.primary}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Settings")}>
              <FontAwesome
                name="cog"
                size={25}
                color={colors.primary}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
