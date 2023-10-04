import React, { useEffect } from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { useToken } from './hooks/useToken';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostContextProvider } from './shared/context/postContext';

import { Action, applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { rootReducer, RootState } from './store';
import thunk, { ThunkAction } from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// const timeout =
//   (ms: number): ThunkAction<void, RootState, unknown, Action<string>> =>
//   (dispatch, _getState) => {
//     dispatch({ type: 'START' });
//     setTimeout(() => {
//       dispatch({ type: 'FINISH' });
//     }, ms);
//   };

function AppComponent() {
  const [token] = useToken();
  // useEffect(() => {
  //   const token = localStorage.getItem('token') || window.__token__;
  //   if (token) {
  //     localStorage.setItem('token', token);
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <PostContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostContextProvider>
        </UserContextProvider>
      </tokenContext.Provider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
