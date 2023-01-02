import React from "react";
import { useDispatch } from "react-redux";
// import { setToken } from "../store/reducer";

export function useToken() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (window.__token__) {
      // dispatch(setToken(window.__token__));
    }
  }, []);
}
