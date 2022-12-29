import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, updateComment } from '../../../store';

export function CommentForm() {
  const value = useSelector<RootState, string>((state) => state.commentText);
  const dispatch = useDispatch();

  const refTextarea = React.useRef<HTMLTextAreaElement>(null);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} ref={refTextarea} />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
