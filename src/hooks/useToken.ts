import React from 'react';

export function useToken() {
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    if (window.__token__) {
      setToken(window.__token__);
    }
  }, []);

  return [token];
}
