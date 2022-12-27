import React from 'react';
import styles from './title.scss';
import { Post } from '../../../../Post';

interface ITitleProps {
  postId?: string;
  subreddit?: string;
  title?: string;
}

export function Title({ postId, subreddit, title }: ITitleProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => setIsModalOpen(!isModalOpen)}>
        {title}
      </a>
      {isModalOpen && (
        <Post postId={postId} subreddit={subreddit} onClose={() => setIsModalOpen(false)} />
      )}
    </h2>
  );
}
