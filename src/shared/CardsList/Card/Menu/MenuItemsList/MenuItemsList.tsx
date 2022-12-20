import React from 'react';
import styles from './menuitemslist.scss';
import classNames from 'classnames';
import { EColors, Text } from '../../../../Text';
import { Icon, EIcons } from '../../../../Icon';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={classNames(styles.menuItem, styles.hide)}>
        <Icon name={EIcons.comments} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Комментарии
        </Text>
      </li>

      <div className={classNames(styles.divider, styles.hide)} />

      <li className={classNames(styles.menuItem, styles.hide)}>
        <Icon name={EIcons.share} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Поделиться
        </Text>
      </li>

      <div className={classNames(styles.divider, styles.hide)} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.block} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>

      <div className={styles.divider} />

      <li className={classNames(styles.menuItem, styles.hide)}>
        <Icon name={EIcons.save} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Сохранить
        </Text>
      </li>

      <div className={classNames(styles.divider, styles.hide)} />

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={16} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
