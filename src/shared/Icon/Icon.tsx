import React from 'react';
import styles from './icon.scss';
import { CommentsIcon, ShareIcon, BlockIcon, SaveIcon, WarningIcon, MenuIcon } from '../Icons';
import { TIconName, TIconSize } from '../Icons/IIconTemplateProps';

export enum EIcons {
  comments = 'comments',
  share = 'share',
  block = 'block',
  save = 'save',
  warning = 'warning',
  menu = 'menu',
}

interface IIconProps {
  name: TIconName;
  size: TIconSize;
}

export function Icon({ name, size }: IIconProps) {
  switch (name) {
    case 'comments':
      return <CommentsIcon size={size} />;
    case 'share':
      return <ShareIcon size={size} />;
    case 'block':
      return <BlockIcon size={size} />;
    case 'save':
      return <SaveIcon size={size} />;
    case 'warning':
      return <WarningIcon size={size} />;
    case 'menu':
      return <MenuIcon size={size} />;
    default:
      return <></>;
  }
}
