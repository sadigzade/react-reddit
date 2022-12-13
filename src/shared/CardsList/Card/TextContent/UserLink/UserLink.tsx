import React from 'react';
import styles from './userlink.scss';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img className={styles.avatar} src="" alt="avatar" />
      <a href="#user-url" className={styles.username}>
        Дмитрий Гришин
      </a>
    </div>
  );
}
