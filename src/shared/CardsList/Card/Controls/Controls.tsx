import React from 'react';
import { CommentButton } from './CommentButton';
import styles from './controls.scss';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

interface IControlsProps {
  comments?: number;
  score?: number;
}

export function Controls({ comments, score }: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score} />
      <CommentButton comments={comments} />

      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
