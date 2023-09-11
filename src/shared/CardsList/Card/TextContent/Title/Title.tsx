import React from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export function Title() {
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  return (
    <h2 className={styles.title}>
      <a
        href="#post-url"
        className={styles.postLink}
        onClick={() => {
          setIsModalOpened(true);
        }}>
        Следует отметить, что новая модель организационной деятельности...
      </a>

      {isModalOpened && (
        <Post
          onClose={() => {
            setIsModalOpened(false);
          }}
        />
      )}
    </h2>
  );
}
