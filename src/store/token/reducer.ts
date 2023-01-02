import { Reducer } from "react";
import { SET_TOKEN, SetTokenAction } from "./actions";

type TokenState = string;

type TokenActions = SetTokenAction;

export const tokenReducer: Reducer<TokenState, TokenActions> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
};
