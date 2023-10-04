import React from 'react';
import styles from './card.css';
import { Controls, IControlsProps } from './Controls';
import { IMenuProps, Menu } from './Menu';
import { IPreviewProps, Preview } from './Preview';
import { ITextContentProps, TextContent } from './TextContent';

export interface ICardProps extends ITextContentProps, IPreviewProps, IMenuProps, IControlsProps {
  postURL: string;
  upvote_ratio: number;
  postId: string;
}

export function Card({
  id,
  subreddit,
  username,
  title,
  userUrl,
  avatarSrc,
  published,
  previewSrc,
  comments,
  score,
}: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent
        id={id}
        subreddit={subreddit}
        username={username}
        title={title}
        userUrl={userUrl}
        avatarSrc={avatarSrc}
        published={published}
      />
      <Preview previewSrc={previewSrc} />
      <Menu id={id} />
      <Controls comments={comments} score={score} />
    </li>
  );
}
