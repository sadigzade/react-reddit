import React from 'react';
import styles from './card.scss';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICardProps {
  data?: {
    title?: string;
    author?: string;
    thumbnail?: string;
    score?: number;
    num_comments?: number;
    created?: number;
    url?: string;
    sr_detail?: {
      icon_img?: string;
    };
  };
}

export function Card({ data }: ICardProps) {
  return (
    <li className={styles.card}>
      <TextContent data={data} />
      <Preview thumbnail={data?.thumbnail} />
      <Menu />
      <Controls comments={data?.num_comments} score={data?.score} />
    </li>
  );
}
