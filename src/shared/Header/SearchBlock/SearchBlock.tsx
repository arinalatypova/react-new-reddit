import React from 'react';
import styles from './searchblock.css';
import axios, { AxiosResponse } from 'axios';
import { UserBlock } from './UserBlock';

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
    if (token) {
      axios
        .get('https://oauth.reddit.com/api/v1/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.snoovatar_img });
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
