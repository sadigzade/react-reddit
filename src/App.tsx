import React from "react";
import thunk from "redux-thunk";
import { hot } from "react-hot-loader/root";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";

import { rootReducer } from "./store/reducer";
import { saveToken } from "./store/token/actions";

import "./main.global.scss";
import { Post } from "./shared/Post";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const [mounted, setMounted] = React.useState(false);
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    setMounted(true);
    dispatch(saveToken());
  }, []);

  return (
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Routes>
                {/* <Route path="/posts/:id" element={<Post />} /> */}
                <Route path="/auth" element={<Navigate replace={true} to="/posts" />} />
                <Route path="/" element={<Navigate replace={true} to="/posts" />} />
                <Route path="/posts" element={<CardsList />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
