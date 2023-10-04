import React, { useContext } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { IPostData, postContext } from '../context/postContext';

export function CardsList() {
  const postData = React.useContext(postContext);

  return (
    <ul className={styles.cardsList}>
      {postData.map(({ data }: IPostData) => (
        <Card
          key={data.id}
          {...{
            id: data.id,
            thumbnail: data.thumbnail,
            title: data.title,
            createdAt: data.created_utc,
            username: data.author,
            avatarSrc: data.sr_detail.icon_img,
            previewSrc: data.sr_detail.banner_img,
            score: data.score,
            comments: data.num_comments,
            postURL: data.permalink,
            userUrl: data.url,
            upvote_ratio: data.upvote_ratio,
            postId: data.id,
          }}
        />
      ))}
    </ul>
  );
}
