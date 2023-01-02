import { ActionCreator, Reducer } from "redux";
import {
  ME_REQUEST,
  ME_REQUEST_ERROR,
  ME_REQUEST_SUCCESS,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction,
} from "./me/actions";
import { MeState, meReducer } from "./me/reducer";
import { tokenReducer } from "./token/reducer";
import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
} from "./posts/actions";
import { PostsState, postsReducer } from "./posts/reducer";

const UPDATE_COMMENT = "UPDATE_COMMENT";
type UpdateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string;
};
export const updateComment: ActionCreator<UpdateCommentAction> = (text) => {
  return {
    type: UPDATE_COMMENT,
    text,
  };
};

export const SET_TOKEN = "SET_TOKEN";
export type SetTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};
export const setToken: ActionCreator<SetTokenAction> = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
  posts: PostsState;
};

const initialState: RootState = {
  commentText: "",
  token: "",
  me: {
    loading: false,
    error: "",
    data: {},
  },
  posts: {
    loading: false,
    error: "",
    data: {},
  },
};

type RootActions =
  | UpdateCommentAction
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;

export const rootReducer: Reducer<RootState, RootActions> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      return {
        ...state,
        me: meReducer(state.me, action),
      };
    case POSTS_REQUEST:
    case POSTS_REQUEST_SUCCESS:
    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        posts: postsReducer(state.posts, action),
      };
    default:
      return state;
  }
};
