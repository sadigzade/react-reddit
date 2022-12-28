import React from 'react';
import styles from './commentcontent.scss';
import { CommentAnswer } from './CommentAnswer';
import { CommentControls } from './CommentControls';
import { CommentUser } from './CommentUser';

interface ICommentContentProps {
  author?: string;
  body?: string;
}

export function CommentContent({ author, body }: ICommentContentProps) {
  const [anwserVisible, setAnwserVisible] = React.useState(false);

  return (
    <div className={styles.commentContent}>
      <CommentUser author={author} />
      <p>{body}</p>
      <CommentControls onChange={setAnwserVisible} />
      {anwserVisible && <CommentAnswer author={author} onChange={setAnwserVisible} />}
    </div>
  );
}
