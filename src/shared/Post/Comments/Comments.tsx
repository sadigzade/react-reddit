import React from 'react';
import styles from './comments.scss';
import { CommentUser } from './CommentUser';
import { CommentControls } from './CommentControls';
import { CommentLeftSide } from './CommentLeftSide';

interface IComment {
  kind?: string;
  data?: {
    author?: string;
    body?: string;
    replies?: {
      data?: {
        children?: IComment[];
      };
    };
  };
}

interface ICommentsProps {
  comments?: IComment[];
}

export function Comments({ comments }: ICommentsProps) {
  return (
    <ul>
      {comments &&
        comments.map(({ kind, data }) => {
          const otherComments = data?.replies?.data?.children;
          console.log(comments);

          return (
            <li className={styles.commentContainer}>
              <CommentLeftSide />
              <div className={styles.commentContentContainer}>
                <div className={styles.commentContent}>
                  <CommentUser author={data?.author} />
                  <p>{data?.body}</p>
                  <CommentControls />
                </div>
                {otherComments && otherComments.length ? (
                  <Comments comments={otherComments} />
                ) : null}
              </div>
            </li>
          );
        })}
    </ul>
  );
}
