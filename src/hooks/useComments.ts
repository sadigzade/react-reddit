import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer";
import { ICommentsData, commentsRequestAsync } from "../store/comments/actions";

export function useComments(subreddit: string, postId: string) {
  const data = useSelector<RootState, ICommentsData>((state) => state.comments.data);

  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    if (token && token.length > 0 && token !== "undefined") {
      dispatch(commentsRequestAsync(subreddit, postId));
    }
  }, [token]);

  return [data];
}
