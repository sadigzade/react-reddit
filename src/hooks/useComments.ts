import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

interface ICommentsData {
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

export function useComments(subreddit: string, postId: string) {
  const [comments, setComments] = React.useState<ICommentsData[]>([]);
  const token = useSelector<RootState, string>((state) => state.token);

  React.useEffect(() => {
    if (token && token.length > 0 && token !== "undefined") {
      axios.get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`).then((res) => {
        const { children } = res.data[1].data;
        setComments(children);
      });
    }
  }, [token]);

  return [comments];
}
