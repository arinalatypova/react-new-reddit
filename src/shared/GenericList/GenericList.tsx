import React from 'react';
import styles from './genericlist.css';
import { noop } from '../../utils/js/noop';

interface IItem {
  id: string;
  text: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = noop, className, id }) => (
        <As className={className} onClick={() => onClick(id)} key={id}>
          {text}
        </As>
      ))}
    </>
  );
}
