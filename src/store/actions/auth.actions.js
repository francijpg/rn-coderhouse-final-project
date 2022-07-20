import { authTypes } from "../types/auth.types";

const { SIGN_UP, SIGN_IN } = authTypes;

import { auth, fbSignUp, fbSignIn } from "../../services/firebase";

export const signUp = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await fbSignUp(auth, email, password);
      dispatch({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      const data = await fbSignIn(auth, email, password);
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
