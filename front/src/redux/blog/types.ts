import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Blog } from "../../api/blog";
import { AsyncState } from "../../lib/reducerUtils";

export type BlogAction = ActionType<typeof actions>;

export type BlogState = {
  blogList: AsyncState<Blog[], Error>;
};
