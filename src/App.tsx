import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { useToken } from './hooks/useToken';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { usePostData } from './hooks/usePostsData';
import { commentContext } from './shared/context/commentContext';

function AppComponent() {
  const [token] = useToken();
  const [commentValue, setCommentValue] = React.useState('');

  return (
    <commentContext.Provider
      value={{
        value: commentValue,
        onChange: setCommentValue,
      }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <CardsList />
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </commentContext.Provider>
  );
}

export const App = hot(() => <AppComponent />);
