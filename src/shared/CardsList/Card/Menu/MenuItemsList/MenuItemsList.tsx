import React from 'react';
import styles from './menuitemslist.scss';
import { EColors, Text } from '../../../../Text';
import { EIcons, Icon } from '../../../../Icon';
import { GenericList } from '../../../../GenericList';
import { generateId } from '../../../../../utils/react/generateRandomIndex';

const MENU_ITEMS_LIST = [
  {
    As: 'li' as const,
    className: 'menuItem',
    icon: <Icon name={EIcons.comments} size={14} />,
    text: 'Комментарии',
    afterDivider: true,
    mobileDisplay: false,
  },
  {
    As: 'li' as const,
    className: 'menuItem',
    icon: <Icon name={EIcons.share} size={14} />,
    text: 'Поделиться',
    afterDivider: true,
    mobileDisplay: false,
  },
  {
    As: 'li' as const,
    className: 'menuItem',
    icon: <Icon name={EIcons.block} size={14} />,
    text: 'Скрыть',
    afterDivider: true,
    mobileDisplay: true,
  },
  {
    As: 'li' as const,
    className: 'menuItem',
    icon: <Icon name={EIcons.save} size={14} />,
    text: 'Сохранить',
    afterDivider: true,
    mobileDisplay: false,
  },
  {
    As: 'li' as const,
    className: 'menuItem',
    icon: <Icon name={EIcons.warning} size={14} />,
    text: 'Пожаловаться',
    afterDivider: false,
    mobileDisplay: true,
  },
].map(generateId);

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <GenericList
        list={MENU_ITEMS_LIST.map((item) => ({
          ...item,
          element: (
            <>
              {item.icon}
              <Text mobileSize={12} size={14} color={EColors.grey99}>
                {item.text}
              </Text>
            </>
          ),
        }))}
      />
    </ul>
  );
}
