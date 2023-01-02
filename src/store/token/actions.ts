import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const SET_TOKEN = "SET_TOKEN";
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};
export const setToken: ActionCreator<SetTokenAction> = (token: string) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (window.__token__ && window.__token__ !== "undefined") {
      dispatch(setToken(window.__token__));
    }
  };
