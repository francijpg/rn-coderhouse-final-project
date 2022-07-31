import { authTypes } from "../types/auth.types";

const {
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  RESTORE_TOKEN,
  SHOW_AUTH_ERROR,
  HIDE_AUTH_ERROR,
  UPLOAD_PROFILE_IMAGE,
} = authTypes;

const initialState = {
  user: null,
  userToken: null,
  loading: true,
  authError: null,
  userProfileImage: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      return {
        ...state,
        user: action.user,
        userToken: action.userToken,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        user: null,
        userToken: null,
        loading: false,
      };
    case RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.userToken,
        loading: false,
      };
    case SHOW_AUTH_ERROR:
      return {
        ...state,
        authError: action.authError,
        loading: false,
      };
    case HIDE_AUTH_ERROR:
      return {
        ...state,
        authError: null,
        loading: false,
      };
    case UPLOAD_PROFILE_IMAGE:
      return {
        ...state,
        userProfileImage: action.userProfileImage,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
