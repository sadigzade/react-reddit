import React from 'react';
import axios from 'axios';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(token: string) {
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

  return [data];
}
