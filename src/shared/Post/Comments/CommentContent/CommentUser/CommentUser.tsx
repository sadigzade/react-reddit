import React from 'react';
import styles from './commentuser.scss';
import { Break } from '../../../../Break';
import { Icon, EIcons } from '../../../../Icon';
import { EColors, Text } from '../../../../Text';

interface ICommentUserProps {
  author?: string;
}

export function CommentUser({ author }: ICommentUserProps) {
  return (
    <div className={styles.commentUser}>
      {/* <img className={styles.avatar} src={''} alt="avatar" /> */}
      <Icon name={EIcons.anon} size={20} />
      <a href="#user-url" className={styles.username}>
        <Text size={16} color={EColors.orange}>
          {author}
        </Text>
      </a>
      <Break size={4} />
      <Text size={16} color={EColors.grey99}>
        2 часа назад
      </Text>
    </div>
  );
}
