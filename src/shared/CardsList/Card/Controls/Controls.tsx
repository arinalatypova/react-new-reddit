import React from 'react';
import styles from './controls.css';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';
import { CommentButton, ICommentButtonProps } from './CommentButton';
import { IKarmaCounterProps, KarmaCounter } from './KarmaCounter';

export interface IControlsProps extends IKarmaCounterProps, ICommentButtonProps {}

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
