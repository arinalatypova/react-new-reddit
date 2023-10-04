import React from 'react';
import styles from './createdat.css';

export interface ICreatedAtProps {
  published?: string;
}

export function CreatedAt({ published }: ICreatedAtProps) {
  return (
    <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано </span>
      {published || '4 часа назад'}
    </span>
  );
}
