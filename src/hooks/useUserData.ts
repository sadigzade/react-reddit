import React from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData() {
  const [data, setData] = React.useState<IUserData>({});
  const token = React.useContext(tokenContext);

  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/api/v1/me?raw__json=1', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          const { icon_img, name } = res.data;
          setData({
            name,
            iconImg: icon_img.split('?')[0],
          });
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
