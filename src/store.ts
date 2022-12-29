import { ActionCreator, AnyAction, Reducer } from 'redux';

export type RootState = {
  commentText: string;
};

const initialState: RootState = {
  commentText: 'Привет, Skillbox!',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const updateComment: ActionCreator<AnyAction> = (text) => {
  return {
    type: UPDATE_COMMENT,
    text,
  };
};

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    default:
      return state;
  }
};
