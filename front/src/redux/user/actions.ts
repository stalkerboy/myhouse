import { createAsyncAction } from "typesafe-actions";
import { AxiosError } from "axios";
import { IPropsLogin, IPropsUserProfile } from "../../types/UserType";

export const GET_USER_PROFILE = "user/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "user/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "user/GET_USER_PROFILE_ERROR";

export const getUserProfileAsync = createAsyncAction(GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR)<string, IPropsUserProfile, AxiosError>();

export const LOGIN_USER = "user/LOGIN_USER";
export const LOGIN_USER_SUCCESS = "user/LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "user/LOGIN_USER_ERROR";

export const loginUserAsync = createAsyncAction(LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR)<IPropsLogin, IPropsUserProfile | null, AxiosError>();

export const LOGOUT_USER = "user/LOGOUT_USER";
export const LOGOUT_USER_SUCCESS = "user/LOGOUT_USER_SUCCESS";
export const LOGOUT_USER_ERROR = "user/LOGOUT_USER_ERROR";

export const logoutUserAsync = createAsyncAction(LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR)<string, IPropsUserProfile | null, AxiosError>();
