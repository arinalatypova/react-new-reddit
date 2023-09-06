import React from 'react';
import styles from './menuitemslist.css';
import { GenericList } from '../../../../GenericList';
import { BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../icons';
import { Text } from '../../../../Text';

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
        <Text size={14}>Комментарии</Text>
      </li>

      <div className={`${styles.divider} ${styles.desktopItem}`}></div>

      <li
        className={`${styles.menuItem} ${styles.desktopItem}`}
        onClick={() => console.log(postId)}>
        <ShareIcon />
        <Text size={14}>Поделиться</Text>
      </li>

      <div className={`${styles.divider} ${styles.desktopItem}`}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon size={14} />
        <Text size={14} mobileSize={12}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider}></div>

      <li
        className={`${styles.menuItem} ${styles.desktopItem}`}
        onClick={() => console.log(postId)}>
        <SaveIcon />
        <Text size={14}>Сохранить</Text>
      </li>

      <div className={`${styles.divider} ${styles.desktopItem}`}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <WarningIcon />
        <Text size={14} mobileSize={12}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
