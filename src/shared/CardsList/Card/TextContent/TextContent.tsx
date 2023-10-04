import React from 'react';
import styles from './textcontent.css';
import { ITitleProps, Title } from './Title';
import { IUserLinkProps, UserLink } from './UserLink';
import { CreatedAt, ICreatedAtProps } from './CreatedAt';

export interface ITextContentProps extends IUserLinkProps, ICreatedAtProps, ITitleProps {}

export function TextContent({
  id,
  subreddit,
  username,
  title,
  userUrl,
  avatarSrc,
  published,
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink username={username} userUrl={userUrl} avatarSrc={avatarSrc} />
        <CreatedAt published={published} />
      </div>
      <Title id={id} subreddit={subreddit} title={title} />
    </div>
  );
}
