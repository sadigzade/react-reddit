import React from "react";
import styles from "./title.scss";
import { Link } from "react-router-dom";

interface ITitleProps {
  postId?: string;
  subreddit?: string;
  title?: string;
}

export function Title({ postId, subreddit, title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`${subreddit}/${postId}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
