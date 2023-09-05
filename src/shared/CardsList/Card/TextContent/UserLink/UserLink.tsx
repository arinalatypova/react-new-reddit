import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        src="https://cdn.dribbble.com/uploads/47401/original/0bbab93269310c5391b5da608c718a40.jpg?1686152330&resize=96x96&vertical=center"
        alt="avatar"
        className={styles.avatar}
      />
      <a href="#user-url" className={styles.username}>
        Дмитрий Гришин
      </a>
    </div>
  );
}
