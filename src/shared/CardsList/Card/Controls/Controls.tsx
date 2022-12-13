import React from 'react';
import { CommentButton } from './CommentButton';
import styles from './controls.scss';
import { KarmaCounter } from './KarmaCounter';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />

      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
