import React from 'react';
import styles from './title.scss';

interface ITitleProps {
  title?: string;
  url?: string;
}

export function Title({ title, url }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <a href={url} className={styles.postLink} target="_blank">
        {title}
      </a>
    </h2>
  );
}
