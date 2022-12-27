import React from 'react';
import styles from './textcontent.scss';
import { Title } from './Title';
import { UserLink } from './UserLink';
import { calcMoment } from '../../../../utils/js/calcMoment';

interface ITextContentProps {
  data?: {
    id?: string;
    title?: string;
    author?: string;
    subreddit?: string;
    created?: number;
    sr_detail?: {
      icon_img?: string;
    };
  };
}

export function TextContent({ data }: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink avatar={data?.sr_detail?.icon_img} author={data?.author} />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          {calcMoment(data?.created)}
        </span>
      </div>
      <Title postId={data?.id} subreddit={data?.subreddit} title={data?.title} />
    </div>
  );
}
