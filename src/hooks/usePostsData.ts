import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducer";
import { IPostsData, postsRequestAsync } from "../store/posts/actions";

export function usePostsData() {
  const data = useSelector<RootState, IPostsData>((state) => state.posts.data);
  // const loading = useSelector<RootState, boolean>((state) => state.posts.loading);

  const token = useSelector<RootState, string>((state) => state.token);
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    if (token && token.length > 0 && token !== "undefined") {
      dispatch(postsRequestAsync());
    }
  }, [token]);

  return [data];
}
