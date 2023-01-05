import React from "react";
import styles from "./icon.scss";
import {
  BlockIcon,
  CommentsIcon,
  IconAnon,
  MenuIcon,
  SaveIcon,
  ShareIcon,
  WarningIcon,
  SendIcon,
  AddIcon,
  ErrorIcon,
} from "../Icons";

export enum EIcons {
  comments = "comments",
  share = "share",
  block = "block",
  save = "save",
  warning = "warning",
  menu = "menu",
  anon = "anon",
  send = "send",
  add = "add",
  error = "error",
}

export type TIconSize = 14 | 16 | 19 | 20 | 30 | 50 | 180;

interface IIconProps {
  name: EIcons;
  size: TIconSize;
}

export function Icon({ name, size }: IIconProps) {
  const icons = {
    [EIcons.comments]: <CommentsIcon size={size} />,
    [EIcons.share]: <ShareIcon size={size} />,
    [EIcons.block]: <BlockIcon size={size} />,
    [EIcons.save]: <SaveIcon size={size} />,
    [EIcons.warning]: <WarningIcon size={size} />,
    [EIcons.menu]: <MenuIcon size={size} />,
    [EIcons.anon]: <IconAnon size={size} />,
    [EIcons.send]: <SendIcon size={size} />,
    [EIcons.add]: <AddIcon size={size} />,
    [EIcons.error]: <ErrorIcon size={size} />,
  };

  return icons[name];
}
