import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.scss';

export function Post() {
  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
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
    </div>,
    node,
  );
}
