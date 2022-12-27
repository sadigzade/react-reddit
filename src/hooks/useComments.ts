import React from 'react';
import { tokenContext } from '../shared/context/tokenContext';
import axios from 'axios';

interface ICommentsData {
  kind?: string;
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
  const token = React.useContext(tokenContext);

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios.get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`).then((res) => {
        const { children } = res.data[1].data;
        setComments(children);
      });
    }
  }, [token]);

  return [comments];
}
