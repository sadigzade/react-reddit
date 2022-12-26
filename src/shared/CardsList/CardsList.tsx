import React from 'react';
import { Card } from './Card';
import styles from './cardslist.scss';
import { postsContext } from '../context/postsContext';

export function CardsList() {
  const posts = React.useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {posts.map((post) => (
        <Card key={post.data?.id} data={post.data} />
      ))}
    </ul>
  );
}
