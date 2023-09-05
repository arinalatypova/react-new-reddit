import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        src="https://cdn.dribbble.com/uploads/47500/original/03e8d463fa0122f2cf09bc3a705163b1.jpg?1686593846&resize=576x432&vertical=center"
        className={styles.previewImg}
      />
    </div>
  );
}
