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
import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
} from "./posts/actions";
import { PostsState, postsReducer } from "./posts/reducer";
import { CommentsState, commentsReducer } from "./comments/reducer";
import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_CLEAR,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS,
  COMMENT_UPDATE,
  CommentUpdateAction,
  CommentsRequestAction,
  CommentsRequestClearAction,
  CommentsRequestErrorAction,
  CommentsRequestSuccessAction,
} from "./comments/actions";
import { SET_TOKEN, SetTokenAction } from "./token/actions";
import { tokenReducer } from "./token/reducer";

export type RootState = {
  token: string;
  me: MeState;
  posts: PostsState;
  comments: CommentsState;
};

const initialState: RootState = {
  token: "",
  me: {
    loading: false,
    error: "",
    data: {},
  },
  posts: {
    loading: false,
    error: "",
    data: [],
    after: "",
  },
  comments: {
    loading: false,
    error: "",
    data: [],
    commentText: "",
  },
};

type RootActions =
  | SetTokenAction
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction
  | PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction
  | CommentsRequestAction
  | CommentsRequestSuccessAction
  | CommentsRequestErrorAction
  | CommentsRequestClearAction
  | CommentUpdateAction;

export const rootReducer: Reducer<RootState, RootActions> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action),
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
    case COMMENTS_REQUEST:
    case COMMENTS_REQUEST_SUCCESS:
    case COMMENTS_REQUEST_ERROR:
    case COMMENTS_REQUEST_CLEAR:
    case COMMENT_UPDATE:
      return {
        ...state,
        comments: commentsReducer(state.comments, action),
      };
    default:
      return state;
  }
};
