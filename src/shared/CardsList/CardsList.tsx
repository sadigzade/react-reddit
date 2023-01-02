import React from "react";
import { Card } from "./Card";
import styles from "./cardslist.scss";
import { usePostsData } from "../../hooks/usePostsData";

export function CardsList() {
  const [data] = usePostsData();

  return (
    <ul className={styles.cardsList}>
      {data instanceof Array && data.map((post) => <Card key={post.data.id} data={post.data} />)}
    </ul>
  );
}
