import React from 'react';
import styles from './preview.css';

export interface IPreviewProps {
  previewSrc?: string;
}

export function Preview({ previewSrc }: IPreviewProps) {
  return (
    <div className={styles.preview}>
      <img
        src={
          previewSrc ||
          'https://cdn.dribbble.com/uploads/47500/original/03e8d463fa0122f2cf09bc3a705163b1.jpg?1686593846&resize=576x432&vertical=center'
        }
        alt="Избражение поста"
        className={styles.previewImg}
      />
    </div>
  );
}
