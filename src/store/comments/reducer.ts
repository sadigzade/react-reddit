import { Reducer } from "react";
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
  ICommentsData,
} from "./actions";

export type CommentsState = {
  loading: boolean;
  error: string;
  data: ICommentsData[];
  commentText: string;
};

type CommentsActions =
  | CommentsRequestAction
  | CommentsRequestSuccessAction
  | CommentsRequestErrorAction
  | CommentsRequestClearAction
  | CommentUpdateAction;

export const commentsReducer: Reducer<CommentsState, CommentsActions> = (state, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case COMMENTS_REQUEST_CLEAR:
      return {
        ...state,
        data: [],
        loading: false,
      };
    case COMMENT_UPDATE:
      return {
        ...state,
        commentText: action.text,
        loading: false,
      };
    default:
      return state;
  }
};
