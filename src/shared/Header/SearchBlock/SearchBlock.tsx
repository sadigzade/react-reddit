import React from 'react';
import styles from './searchblock.scss';
import { UserBlock } from './UserBlock';
import axios from 'axios';

interface ISearchBlockProps {
  token: string;
}

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data, setData] = React.useState<IUserData>({});

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/api/v1/me?raw__json=1', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          const { name, icon_img } = res.data;
          setData({
            name: name,
            iconImg: icon_img.split('?')[0],
          });
        })
        .catch(console.log);
    }
  }, [token]);

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
