import { authTypes } from "../types/auth.types";
import { messages } from "../../constants/messages";

import {
  auth,
  fbSignUp,
  fbSignIn,
  fbSignOut,
  addUserToDatabase,
} from "../../services/firebase";
import { setToken, deleteToken } from "../../utils/token";

const {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  RESTORE_TOKEN,
  SHOW_AUTH_ERROR,
  HIDE_AUTH_ERROR,
  UPLOAD_PROFILE_IMAGE,
} = authTypes;
const { signInError, signUpError, restoreSessionError, signOutError } =
  messages;

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const { _tokenResponse: fbToken, user } = await fbSignUp(
        auth,
        email,
        password
      );
      if (user) {
        const { uid, displayName, email } = user;
        const userData = {
          id: uid,
          name: displayName ? displayName : "",
          email: email ? email : "",
        };
        await addUserToDatabase(userData);
        await setToken(user.uid);
        dispatch({
          type: SIGN_UP,
          user: userData,
          userToken: user.uid,
        });
      }
    } catch (error) {
      dispatch({
        type: SHOW_AUTH_ERROR,
        authError: signUpError,
      });
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const { _tokenResponse: fbToken, user } = await fbSignIn(
        auth,
        email,
        password
      );
      if (user) {
        const { uid, displayName, email } = user;
        const userData = {
          id: uid,
          name: displayName ? displayName : "",
          email: email ? email : "",
        };
        await setToken(user.uid);
        dispatch({
          type: SIGN_IN,
          user: userData,
          userToken: user.uid,
        });
      }
    } catch (error) {
      dispatch({
        type: SHOW_AUTH_ERROR,
        authError: signInError,
      });
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
      dispatch({
        type: SHOW_AUTH_ERROR,
        authError: signOutError,
      });
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
      dispatch({
        type: SHOW_AUTH_ERROR,
        authError: restoreSessionError,
      });
    }
  };
};

export const hideAuthError = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: HIDE_AUTH_ERROR,
      });
    } catch (error) {
      console.error(`hideAuthError error: ${error}`);
    }
  };
};

export const uploadProfileImage = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: UPLOAD_PROFILE_IMAGE,
        userProfileImage: true,
      });
    } catch (error) {
      console.error(`uploadProfileImage error: ${error}`);
    }
  };
};
