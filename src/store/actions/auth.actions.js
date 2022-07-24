import { authTypes } from "../types/auth.types";
const { SIGN_UP, SIGN_IN, SIGN_OUT, RESTORE_TOKEN } = authTypes;

import { auth, fbSignUp, fbSignIn, fbSignOut } from "../../services/firebase";
import { setToken, deleteToken } from "../../utils/token";

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const { _tokenResponse: response } = await fbSignUp(
        auth,
        email,
        password
      );
      await setToken(response.idToken);
      dispatch({
        type: SIGN_UP,
        userToken: response.idToken,
        userId: response.localId,
      });
    } catch (error) {
      console.log(`signUp error: ${error}`);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const { _tokenResponse: response } = await fbSignIn(
        auth,
        email,
        password
      );
      await setToken(response.idToken);
      dispatch({
        type: SIGN_IN,
        userToken: response.idToken,
        userId: response.localId,
      });
    } catch (error) {
      console.log(`signIn error: ${error}`);
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      await fbSignOut(auth);
      await deleteToken();
      dispatch({
        type: SIGN_OUT,
      });
    } catch (error) {
      console.log(`signOut error: ${error}`);
    }
  };
};

export const restoreSession = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: RESTORE_TOKEN,
        userToken: token,
      });
    } catch (error) {
      console.log(`restoreSession error: ${error}`);
    }
  };
};
