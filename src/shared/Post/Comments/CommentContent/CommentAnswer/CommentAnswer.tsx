import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentanswer.scss';
import { EIcons, Icon } from '../../../../Icon';

interface ICommentAnswerProps {
  author?: string;
  onChange: (visible: boolean) => void;
}

export function CommentAnswer({ author }: ICommentAnswerProps) {
  const [answerValue, setAnswerValue] = React.useState('');
  const refTextarea = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (refTextarea.current !== null) {
      refTextarea.current.focus();
      setAnswerValue(`${author}, `);
    }
  }, []);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setAnswerValue(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form className={styles.answerForm} onSubmit={handleSubmit}>
      <textarea
        className={styles.answerInput}
        value={answerValue}
        onChange={handleChange}
        ref={refTextarea}
      />
      <button type="submit" className={styles.answerButton}>
        <Icon name={EIcons.send} size={20} />
      </button>
    </form>
  );
}
