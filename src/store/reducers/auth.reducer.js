import { authTypes } from "../types/auth.types";

const { SIGN_UP, SIGN_IN, SIGN_OUT, RESTORE_TOKEN } = authTypes;

const initialState = {
  userToken: null,
  userId: null,
  loading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        userToken: action.userToken,
        userId: action.userId,
        loading: false,
      };
    case SIGN_IN: // TODO: mix this with SIGN_UP
      return {
        ...state,
        userToken: action.userToken,
        userId: action.userId,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        userToken: null,
        userId: null,
        loading: false,
      };
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.userToken,
        userId: null, // TODO: get userId from token or remove it
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
