import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import './main.global.scss';
import { Dropdown } from './shared/Dropdown';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <div style={{ padding: 20 }}>
          <br />
          <Dropdown
            onOpen={() => console.log('opened')}
            onClose={() => console.log('closed')}
            isOpen={false}
            button={<button>Test</button>}>
            <CardsList />
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
