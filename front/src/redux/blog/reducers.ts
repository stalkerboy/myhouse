import { createReducer } from "typesafe-actions";
import { BlogState, BlogAction } from "./types";
import { getBlogListAsync } from "./actions";
import { createAsyncReducer, transformToArray } from "../../lib/reducerUtils";

const initialState: BlogState = {
  // counterProfile: asyncState.initial(),
  blogList: { data: [], error: null, loading: false },
};

export const blog = createReducer<BlogState, BlogAction>(initialState).handleAction(transformToArray(getBlogListAsync), createAsyncReducer(getBlogListAsync, "blogList"));
