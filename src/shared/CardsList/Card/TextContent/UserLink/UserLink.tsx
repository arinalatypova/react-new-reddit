import React from 'react';
import styles from './userlink.css';

export interface IUserLinkProps {
  username: string;
  userUrl?: string;
  avatarSrc?: string;
}

export function UserLink({ username, userUrl, avatarSrc }: IUserLinkProps) {
  return (
    <div className={styles.userLink}>
      <img
        src={
          avatarSrc ||
          'https://cdn.dribbble.com/uploads/47401/original/0bbab93269310c5391b5da608c718a40.jpg?1686152330&resize=96x96&vertical=center'
        }
        alt="avatar"
        className={styles.avatar}
      />
      <a href={userUrl || '#user-url'} className={styles.username}>
        {username || 'Дмитрий Гришин'}
      </a>
    </div>
  );
}
