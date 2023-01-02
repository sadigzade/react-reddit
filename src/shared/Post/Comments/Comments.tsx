import React from "react";
import styles from "./comments.scss";
import { CommentLeftSide } from "./CommentLeftSide";
import { CommentContent } from "./CommentContent";
import { ICommentsData } from "../../../store/comments/actions";

interface ICommentsProps {
  comments?: ICommentsData[];
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
