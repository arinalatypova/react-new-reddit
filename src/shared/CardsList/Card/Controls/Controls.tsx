import React from 'react';
import styles from './controls.css';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';
import { CommentButton } from './CommentButton';
import { KarmaCounter } from './KarmaCounter';

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
