import React from "react";
import ReactDOM from "react-dom";
import { App } from "../App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

window.addEventListener("load", () => {
  ReactDOM.hydrate(<RouterProvider router={router} />, document.getElementById("react_root"));
});
