import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { CardsList } from './shared/CardsList';
import { useToken } from './hooks/useToken';
import './main.global.scss';
import { tokenContext } from './shared/context/tokenContext';
import { UserContextProvider } from './shared/context/userContext';
import { PostsContextProvider } from './shared/context/PostsContext';
import { commentContext } from './shared/context/commentContex';

function AppComponent() {
  const [commentValue, setCommentValue] = React.useState('');
  const [token] = useToken();

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
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
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);
