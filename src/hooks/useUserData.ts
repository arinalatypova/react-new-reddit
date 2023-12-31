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
    if (token) {
      axios
        .get('https://oauth.reddit.com/api/v1/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const userData = res.data;
          setData({ name: userData.name, iconImg: userData.snoovatar_img });
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
