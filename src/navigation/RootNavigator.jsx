import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

import AuthStack from "./AuthStack";
import BottomTab from "./BottomTab";
import Splash from "../screens/splash/Splash";

import { getToken } from "../utils/token";
import { restoreSession } from "../store/actions/auth.actions";

export default function RootNavigator() {
  const { userToken, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getSession();
  }, []);

  async function getSession() {
    try {
      const value = await getToken();
      if (value !== null) {
        dispatch(restoreSession(value));
        return value;
      } else {
        dispatch(restoreSession(null));
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {userToken ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}
