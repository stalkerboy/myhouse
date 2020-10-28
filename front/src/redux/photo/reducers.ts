import { createReducer } from "typesafe-actions";
import { PhotoState, PhotoAction } from "./types";
import { getPhotoListAsync } from "./actions";
import { createAsyncReducer, transformToArray } from "../../lib/reducerUtils";

const initialState: PhotoState = {
  // counterProfile: asyncState.initial(),
  photoList: { data: [], error: null, loading: false },
};

export const photo = createReducer<PhotoState, PhotoAction>(initialState).handleAction(transformToArray(getPhotoListAsync), createAsyncReducer(getPhotoListAsync, "photoList"));
