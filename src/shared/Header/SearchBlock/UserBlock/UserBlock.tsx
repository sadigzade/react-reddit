import React from 'react';
import { Break } from '../../../Break';
import { EColors, Text } from '../../../Text';
import styles from './userblock.scss';
import { EIcons, Icon } from '../../../Icon';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=zFWTLZXtr3FDN6-Mb3VE_A&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img src={avatarSrc} className={styles.avatarImage} alt="User Avatar" />
        ) : (
          <Icon name={EIcons.anon} size={50} />
        )}
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColors.black : EColors.grey99}>
          {username || 'Аноним'}
        </Text>
      </div>
    </a>
  );
}
