import React from 'react';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  const { iconImg, name } = React.useContext(userContext);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  );
}
