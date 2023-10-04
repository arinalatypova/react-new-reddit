import React from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';

export interface ITitleProps {
  id: string;
  subreddit?: string;
  title: string;
}

export function Title({ id, subreddit, title }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = React.useState(false);

  return (
    <h2 className={styles.title}>
      <a
        href="#post-url"
        className={styles.postLink}
        onClick={() => {
          setIsModalOpened(true);
        }}>
        {title ||
          `Следует отметить, что новая модель организационной деятельности 
          Следует отметить, что новая модель организационной деятельности`}
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
