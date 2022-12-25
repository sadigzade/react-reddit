import React from 'react';
import styles from './title.scss';
import { Post } from '../../../../Post';

interface ITitleProps {
  title?: string;
}

export function Title({ title }: ITitleProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink} onClick={() => setIsModalOpen(!isModalOpen)}>
        {title}
      </a>
      {isModalOpen && <Post />}
    </h2>
  );
}
