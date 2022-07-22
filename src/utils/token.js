import AsyncStorage from "@react-native-async-storage/async-storage";
import { TOKEN } from "../constants/token";

export const setToken = async (value) => {
  try {
    await AsyncStorage.setItem(TOKEN, value);
  } catch (e) {
    console.log("setToken error :" + e);
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log("getToken error :" + e);
  }
};

export const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN);
  } catch (e) {
    console.log("getToken error :" + e);
  }
};
