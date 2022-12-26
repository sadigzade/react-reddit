import React from 'react';
import styles from './preview.scss';

interface IPreviewProps {
  thumbnail?: string;
}

export function Preview({ thumbnail = '' }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={!thumbnail.includes('https') ? 'https://lmedia.xyz/placeholder.png' : thumbnail}
        alt="preview"
      />
    </div>
  );
}
