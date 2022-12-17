import React from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.scss';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';

function AppComponent() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
