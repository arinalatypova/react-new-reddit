import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { IMenuItemsListProps, MenuItemsList } from './MenuItemsList';
import { MenuIcon } from '../../../icons';

export interface IMenuProps extends IMenuItemsListProps {}

export function Menu({ id }: IMenuProps) {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }>
        <div className={styles.dropdown}>
          <MenuItemsList id="1234" />
          <button className={`${styles.closeButton} ${styles.desktopButton}`}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
