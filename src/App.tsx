import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/postsContext';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './store';
import './main.global.scss';

const store = createStore(rootReducer, devToolsEnhancer());

function AppComponent() {
  const [token] = useToken();

  return (
    <Provider store={store}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <PostsContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostsContextProvider>
        </UserContextProvider>
      </tokenContext.Provider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
function composeWithDevTools(): import('redux').StoreEnhancer<unknown, unknown> | undefined {
  throw new Error('Function not implemented.');
}
