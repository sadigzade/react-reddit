import React from 'react';
import styles from './commentcontrols.scss';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../../GenericList';
import { Icon, EIcons } from '../../../../Icon';
import { EColors, Text } from '../../../../Text';

const MENU_ITEMS_LIST = [
  {
    As: 'li' as const,
    className: 'commentControl',
    icon: <Icon name={EIcons.comments} size={14} />,
    text: 'Ответить',
    afterDivider: false,
    mobileDisplay: false,
  },
  {
    As: 'li' as const,
    className: 'commentControl',
    icon: <Icon name={EIcons.share} size={14} />,
    text: 'Поделиться',
    afterDivider: false,
    mobileDisplay: false,
  },
  {
    As: 'li' as const,
    className: 'commentControl',
    icon: <Icon name={EIcons.warning} size={16} />,
    text: 'Пожаловаться',
    afterDivider: false,
    mobileDisplay: false,
  },
].map(generateId);

interface ICommentControlsProps {
  onChange: (visible: boolean) => void;
}

export function CommentControls({ onChange }: ICommentControlsProps) {
  return (
    <ul className={styles.commentControls}>
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
          onChange,
        }))}
      />
    </ul>
  );
}
