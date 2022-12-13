import React from 'react';
import './main.global.scss';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Content>content</Content>
    </Layout>
  );
}

export default App;
