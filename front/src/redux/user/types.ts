import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { AsyncState } from "../../lib/reducerUtils";
import { IPropsUserProfile } from "../../types/UserType";

export type UserAction = ActionType<typeof actions>;

export type UserState = {
  userProfile: AsyncState<IPropsUserProfile, Error>;
};
