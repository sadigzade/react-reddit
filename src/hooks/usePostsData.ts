import React from 'react';
import { tokenContext } from '../shared/context/tokenContext';
import axios from 'axios';

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

export function usePostsData() {
  const [data, setData] = React.useState<IPostsData[]>([]);
  const token = React.useContext(tokenContext);

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          const { children } = res.data.data;

          setData(children);
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
