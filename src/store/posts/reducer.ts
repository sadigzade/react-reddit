import { Reducer } from "react";
import {
  IPostsData,
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
} from "./actions";

export type PostsState = {
  loading: boolean;
  error: string;
  data: IPostsData[];
  after: string;
};

type PostsActions = PostsRequestAction | PostsRequestSuccessAction | PostsRequestErrorAction;

export const postsReducer: Reducer<PostsState, PostsActions> = (state, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: [...(<[]>state.data), ...(<[]>action.data)],
        after: action.after,
        loading: false,
      };
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
