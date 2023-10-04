import React from 'react';
import { usePostData } from '../../hooks/usePostsData';

export interface IPostData {
  data: {
    id: string;
    author: string;
    thumbnail: string;
    title: string;
    subreddit_name_prefixed: string;
    score: number;
    created_utc: number;
    num_comments: number;
    permalink: string;
    url: string;
    upvote_ratio: number;
    sr_detail: {
      banner_img: string;
      icon_img: string;
    };
  };
}

export const postContext = React.createContext<IPostData[]>([]);

export function PostContextProvider({ children }: { children: React.ReactNode }) {
  const postData = usePostData();
  return <postContext.Provider value={postData}>{children}</postContext.Provider>;
}
