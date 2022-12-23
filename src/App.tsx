import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import './main.global.scss';
import { tokenContext } from './shared/context/tokenContext';

function AppComponent() {
  const [token] = useToken();
  const { Provider } = tokenContext;

  return (
    <Provider value={token}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
