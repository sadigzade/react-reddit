import React from 'react';
import styles from './genericlist.scss';

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

const NOOP = () => {};

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {list.map(({ As = 'div', text, onClick = NOOP, className = 'dropdownItem', id, href }) => (
        <As className={styles[className]} onClick={() => onClick(id)} key={id} href={href}>
          {text}
        </As>
      ))}
    </>
  );
}
