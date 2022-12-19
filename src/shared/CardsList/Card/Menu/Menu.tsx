import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { merge } from '../../../../utils/js/merge';
import { generateId } from '../../../../utils/react/generateRandomIndex';

const LIST = [
  { text: 'Комментарии', As: 'div' as const, className: 'dropdownItem' },
  { text: 'Поделиться', As: 'div' as const, className: 'dropdownItem' },
  { text: 'Скрыть', As: 'div' as const, className: 'dropdownItem' },
  { text: 'Сохранить', As: 'div' as const, className: 'dropdownItem' },
  { text: 'Пожаловаться', As: 'div' as const, className: 'dropdownItem' },
  { text: 'Закрыть', As: 'div' as const, className: 'dropdownClose' },
].map(generateId);

const menuButton = (
  <button className={styles.menuButton}>
    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
      <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
      <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
    </svg>
  </button>
);

export function Menu() {
  const handleClickMenu = (id: string) => {
    console.log(id);
  };

  return (
    <div className={styles.menu}>
      <Dropdown button={menuButton}>
        <GenericList list={LIST.map(merge({ onClick: () => handleClickMenu }))} />
      </Dropdown>
    </div>
  );
}
