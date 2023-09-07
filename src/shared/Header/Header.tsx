import React, { useContext } from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

export function Header() {
  // const { Consumer } = tokenContext;
  // const token = useContext(tokenContext);
  return (
    <header className={styles.header}>
      {/* <Consumer>{(token) => <SearchBlock token={token} />}</Consumer> */}
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
