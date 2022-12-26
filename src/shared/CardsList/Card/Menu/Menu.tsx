import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { MenuItemsList } from './MenuItemsList';
import { EColors, Text } from '../../../Text';
import { EIcons, Icon } from '../../../Icon';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={EIcons.menu} size={20} />
          </button>
        }>
        <div className={styles.dropdown}>
          <MenuItemsList postId="1234" />
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
