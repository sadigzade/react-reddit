import React from 'react';
import styles from './title.scss';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>
        Следует отметить, что новая модель организационной деятельности Следует отметить, что новая
        модель организационной деятельности
      </a>
    </h2>
  );
}
