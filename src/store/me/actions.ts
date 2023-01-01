import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { RootState } from "../reducer";

export const ME_REQUEST = "ME_REQUEST";
export type MeRequestAction = {
  type: typeof ME_REQUEST;
};
export const meRequest: ActionCreator<MeRequestAction> = () => {
  return {
    type: ME_REQUEST,
  };
};

export interface IUserData {
  name?: string;
  iconImg?: string;
}
export const ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS";
export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
};
export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => {
  return {
    type: ME_REQUEST_SUCCESS,
    data,
  };
};

export const ME_REQUEST_ERROR = "ME_REQUEST_ERROR";
export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
};
export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => {
  return {
    type: ME_REQUEST_ERROR,
    error,
  };
};

export const meRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get("https://oauth.reddit.com/api/v1/me?raw__json=1", {
        headers: { Authorization: `bearer ${getState().token}` },
      })
      .then((res) => {
        const { icon_img, name } = res.data;
        dispatch(meRequestSuccess({ name, iconImg: icon_img.split("?")[0] }));
      })
      .catch((error) => {
        console.log(error);
        dispatch(meRequestError(String(error)));
      });
  };
