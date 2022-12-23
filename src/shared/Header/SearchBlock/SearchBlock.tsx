import React from 'react';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

interface ISearchBlockProps {
  token: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data] = useUserData(token);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
