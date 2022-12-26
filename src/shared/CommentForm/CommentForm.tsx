import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentform.scss';

export function CommentForm() {
  const [value, setValue] = React.useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} value={value} onChange={handleChange} />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
