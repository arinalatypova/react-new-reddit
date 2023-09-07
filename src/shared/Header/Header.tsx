import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

interface IHeaderProps {
  token: string;
}

export function Header({ token }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <SearchBlock token={token} />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
