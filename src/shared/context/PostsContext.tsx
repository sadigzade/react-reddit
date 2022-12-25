import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostsContextData {
  kind?: string;
  data?: {
    id?: string;
    title?: string;
    author?: string;
    thumbnail?: string;
    score?: number;
    num_comments?: number;
    created?: number;
    url?: string;
    sr_detail?: {
      icon_img?: string;
    };
  };
}

export const postsContext = React.createContext<IPostsContextData[]>([]);

export interface IPostsContextProviderProps {
  children: React.ReactNode;
}

export function PostsContextProvider({ children }: IPostsContextProviderProps) {
  const [data] = usePostsData();
  return <postsContext.Provider value={data}>{children}</postsContext.Provider>;
}
