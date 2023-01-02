import { Reducer } from "react";
import { SET_TOKEN, SetTokenAction } from "./actions";

export type TokenState = {
  token: string;
};

type TokenActions = SetTokenAction;

export const tokenReducer: Reducer<TokenState, TokenActions> = (state, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
