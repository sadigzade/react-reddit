import React from 'react';
import styles from './comments.scss';
import { CommentLeftSide } from './CommentLeftSide';
import { CommentContent } from './CommentContent';

interface IComment {
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
        comments.map(({ data }) => {
          const otherComments = data?.replies?.data?.children;

          return (
            <li className={styles.commentContainer}>
              <CommentLeftSide />
              <div className={styles.commentContentContainer}>
                <CommentContent author={data?.author} body={data?.body} />
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
