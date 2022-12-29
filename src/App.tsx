import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer, setToken } from "./store";
import "./main.global.scss";
import { useDispatch } from "react-redux";

const store = createStore(rootReducer, devToolsEnhancer());

function AppComponent() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  }, []);

  return (
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
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
