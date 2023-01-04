import React from "react";
import { Card } from "./Card";
import styles from "./cardslist.scss";
import { usePostsData } from "../../hooks/usePostsData";
import { Skeleton } from "./Skeleton";

export function CardsList() {
  const { data, loading, error } = usePostsData();
  const skeletons = [...new Array(5)].map((val, index) => (
    <li key={index}>
      <Skeleton />
    </li>
  ));

  return (
    <ul className={styles.cardsList}>
      {Object.values(data).length === 0 && !loading && !error && (
        <div role="alert">
          {skeletons}
          <div className={styles.error}>
            &#128577; <br /> Хмм... здесь пока пусто
          </div>
        </div>
      )}
      {loading
        ? skeletons
        : Object.values(data).map((post) => <Card key={post.data.id} data={post.data} />)}
      {error && (
        <div role="alert">
          {skeletons}
          <div className={styles.error}>
            &#128683; <br /> К сожалению, что-то пошло не так
          </div>
        </div>
      )}
    </ul>
  );
}

//&#128683;
