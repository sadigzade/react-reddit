import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import axios from "axios";

export interface ICommentsData {
  data?: {
    author?: string;
    body?: string;
    replies?: {
      data?: {
        children?: ICommentsData[];
      };
    };
  };
}

export const COMMENTS_REQUEST = "COMMENTS_REQUEST";
export type CommentsRequestAction = {
  type: typeof COMMENTS_REQUEST;
};
export const commentsRequest: ActionCreator<CommentsRequestAction> = () => {
  return {
    type: COMMENTS_REQUEST,
  };
};

export const COMMENTS_REQUEST_SUCCESS = "COMMENTS_REQUEST_SUCCESS";
export type CommentsRequestSuccessAction = {
  type: typeof COMMENTS_REQUEST_SUCCESS;
  data: ICommentsData[];
};
export const commentsRequestSuccess: ActionCreator<CommentsRequestSuccessAction> = (
  data: ICommentsData[],
) => {
  return {
    type: COMMENTS_REQUEST_SUCCESS,
    data,
  };
};

export const COMMENTS_REQUEST_ERROR = "COMMENTS_REQUEST_ERROR";
export type CommentsRequestErrorAction = {
  type: typeof COMMENTS_REQUEST_ERROR;
  error: string;
};
export const commentsRequestError: ActionCreator<CommentsRequestErrorAction> = (error: string) => {
  return {
    type: COMMENTS_REQUEST_ERROR,
    error,
  };
};

export const commentsRequestAsync =
  (subreddit: string, postId: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(commentsRequest());
    axios
      .get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`)
      .then((res) => {
        const { children } = res.data[1].data;
        dispatch(commentsRequestSuccess(children));
      })
      .catch((error) => {
        console.log(error);
        dispatch(commentsRequestError(String(error)));
      });
  };
