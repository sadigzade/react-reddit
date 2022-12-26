import React from 'react';
import styles from './userlink.scss';
import { EIcons, Icon } from '../../../../Icon';
import { Break } from '../../../../Break';

interface IUserLinkProps {
  avatar?: string;
  author?: string;
}

export function UserLink({ avatar, author }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      {avatar ? (
        <img className={styles.avatar} src={avatar} alt="avatar" />
      ) : (
        <>
          <Icon name={EIcons.anon} size={20} />
          <Break size={8} />
        </>
      )}
      <a href="#user-url" className={styles.username}>
        {author}
      </a>
    </div>
  );
}
