import React from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

export function usePostData() {
  const [postData, setPostData] = React.useState({});
  const token = React.useContext(tokenContext);

  React.useEffect(() => {
    if (token) {
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setPostData(res.data.data.children);
          console.log(postData);
        })
        .catch(console.log);
    }
  }, [token]);
  return [postData];
}
