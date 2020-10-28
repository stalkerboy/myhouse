import { createAsyncAction } from "typesafe-actions";
import { Photo } from "../../api/photo";
import { AxiosError } from "axios";

export const GET_PHOTO_LIST = "photo/GET_PHOTO_LIST";
export const GET_PHOTO_LIST_SUCCESS = "photo/GET_PHOTO_LIST_SUCCESS";
export const GET_PHOTO_LIST_ERROR = "photo/GET_PHOTO_LIST_ERROR";

export const getPhotoListAsync = createAsyncAction(GET_PHOTO_LIST, GET_PHOTO_LIST_SUCCESS, GET_PHOTO_LIST_ERROR)<number, Photo[], AxiosError>();
