import React from 'react';
import styles from './comments.scss';
import { CommentUser } from './CommentUser';
import { CommentControls } from './CommentControls';
import { CommentLeftSide } from './CommentLeftSide';

interface IComment {
  text?: string;
  otherComments?: IComment;
}

interface ICommentsProps {
  comments?: IComment[];
}

export function Comments({ comments }: ICommentsProps) {
  return (
    <ul>
      {comments &&
        comments.map(({ text, otherComments }) => (
          <li className={styles.commentContainer}>
            <CommentLeftSide />
            <div className={styles.commentContentContainer}>
              <div className={styles.commentContent}>
                <CommentUser />
                <p>{text}</p>
                <CommentControls />
              </div>
              {otherComments && Object.keys(otherComments).length ? (
                <Comments comments={[otherComments]} />
              ) : null}
            </div>
          </li>
        ))}
    </ul>
  );
}
