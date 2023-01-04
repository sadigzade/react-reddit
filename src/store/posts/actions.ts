import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import axios from "axios";
import { useSelector } from "react-redux";

export interface IPostsData {
  kind?: string;
  data?: {
    id?: string;
    title?: string;
    author?: string;
    thumbnail?: string;
    score?: number;
    subreddit?: string;
    num_comments?: number;
    created?: number;
    sr_detail?: {
      icon_img?: string;
    };
  };
}

export const POSTS_REQUEST = "POSTS_REQUEST";
export type PostsRequestAction = {
  type: typeof POSTS_REQUEST;
};
export const postsRequest: ActionCreator<PostsRequestAction> = () => {
  return {
    type: POSTS_REQUEST,
  };
};

export const POSTS_REQUEST_SUCCESS = "POSTS_REQUEST_SUCCESS";
export type PostsRequestSuccessAction = {
  type: typeof POSTS_REQUEST_SUCCESS;
  data: IPostsData;
  after: string;
};
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (
  data: IPostsData,
  after: string,
) => {
  return {
    type: POSTS_REQUEST_SUCCESS,
    data,
    after,
  };
};

export const POSTS_REQUEST_ERROR = "POSTS_REQUEST_ERROR";
export type PostsRequestErrorAction = {
  type: typeof POSTS_REQUEST_ERROR;
  error: string;
};
export const postsRequestError: ActionCreator<PostsRequestErrorAction> = (error: string) => {
  return {
    type: POSTS_REQUEST_ERROR,
    error,
  };
};

export const postsRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch, getState) => {
    dispatch(postsRequest());

    try {
      const {
        data: {
          data: { after, children },
        },
      } = await axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
        headers: { Authorization: `bearer ${getState().token}` },
        params: {
          limit: 10,
          after: getState().posts.after,
        },
      });

      dispatch(postsRequestSuccess(children, after));
    } catch (error) {
      console.log(error);
      dispatch(postsRequestError(String(error)));
    }
  };
