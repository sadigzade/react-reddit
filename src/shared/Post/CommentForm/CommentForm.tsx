import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.scss';
import { commentContext } from '../../context/commentContex';

export function CommentForm() {
  const { value, onChange } = React.useContext(commentContext);
  const refTextarea = React.useRef<HTMLTextAreaElement>(null);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
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
