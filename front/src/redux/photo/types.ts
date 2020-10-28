import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Photo } from "../../api/photo";
import { AsyncState } from "../../lib/reducerUtils";

export type PhotoAction = ActionType<typeof actions>;

export type PhotoState = {
  photoList: AsyncState<Photo[], Error>;
};
