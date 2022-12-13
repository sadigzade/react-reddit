import React from 'react';
import styles from './preview.scss';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/4147385/file/original-fa70b671aec432169bcf0a63a3cc123f.jpg?compress=1&crop=339x293-3261x2484&resize=800x600&vertical=top"
        alt="preview"
      />
    </div>
  );
}
