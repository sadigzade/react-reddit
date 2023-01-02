import React from "react";
import thunk from "redux-thunk";
import { hot } from "react-hot-loader/root";
import { Provider, useDispatch } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";

import { rootReducer } from "./store/reducer";
import { setToken } from "./store/token/actions";

import "./main.global.scss";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

function AppComponent() {
  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    if (window.__token__ && window.__token__ !== "undefined") {
      dispatch(setToken(window.__token__));
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
