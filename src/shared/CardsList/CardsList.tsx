import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';

export function CardsList() {
  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
