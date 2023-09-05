import React from 'react';
import styles from './menuitemslist.css';
import { GenericList } from '../../../../GenericList';
import { BlockIcon, WarningIcon } from '../../../../icons';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        <span>Скрыть</span>
      </li>

      <div className={styles.divider}></div>

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <WarningIcon />
        <span>Пожаловаться</span>
      </li>
    </ul>
  );
}
