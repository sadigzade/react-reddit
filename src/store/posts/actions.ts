import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";
import axios from "axios";

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
};
export const postsRequestSuccess: ActionCreator<PostsRequestSuccessAction> = (data: IPostsData) => {
  return {
    type: POSTS_REQUEST_SUCCESS,
    data,
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
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(postsRequest());

    async function load() {
      try {
        const {
          data: {
            data: { children },
          },
        } = await axios.get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `bearer ${getState().token}` },
        });

        dispatch(postsRequestSuccess(children));
      } catch (error) {
        console.error(error);
        dispatch(postsRequestError(String(error)));
      }
    }

    load();
  };
