import React from 'react';
import styles from './menuitemslist.css';
import { GenericList } from '../../../../GenericList';
import { BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../icons';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li
        className={`${styles.menuItem} ${styles.desktopItem}`}
        onClick={() => console.log(postId)}>
        <CommentIcon />
        <span>Комментарии</span>
      </li>

      <div className={`${styles.divider} ${styles.desktopItem}`}></div>

      <li
        className={`${styles.menuItem} ${styles.desktopItem}`}
        onClick={() => console.log(postId)}>
        <ShareIcon />
        <span>Поделиться</span>
      </li>

      <div className={`${styles.divider} ${styles.desktopItem}`}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <span>Скрыть</span>
      </li>

      <div className={styles.divider}></div>

      <li
        className={`${styles.menuItem} ${styles.desktopItem}`}
        onClick={() => console.log(postId)}>
        <SaveIcon />
        <span>Сохранить</span>
      </li>

      <div className={`${styles.divider} ${styles.desktopItem}`}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <WarningIcon />
        <span>Пожаловаться</span>
      </li>
    </ul>
  );
}
