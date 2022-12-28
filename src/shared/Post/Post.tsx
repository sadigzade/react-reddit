import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';
import { CommentForm } from './CommentForm';
import { Comments } from './Comments';
import { useComments } from '../../hooks/useComments';

interface IPostProps {
  postId?: string;
  subreddit?: string;
  onClose?: () => void;
}

interface ICommentsData {
  data?: {
    author?: string;
    body?: string;
    replies?: {
      data?: {
        children?: ICommentsData[];
      };
    };
  };
}

export function Post({ postId = '', subreddit = '', onClose }: IPostProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [comments] = useComments(subreddit, postId);

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, animi.</h2>

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dignissimos saepe
          neque, veniam odit dolore nulla quaerat nam itaque vitae!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dignissimos saepe
          neque, veniam odit dolore nulla quaerat nam itaque vitae!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo dignissimos saepe
          neque, veniam odit dolore nulla quaerat nam itaque vitae!
        </p>
      </div>

      <CommentForm />
      <Comments comments={comments} />
    </div>,
    node,
  );
}
