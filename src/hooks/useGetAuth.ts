import React from 'react';

export default function useGetAuth() {
  const [auth, setAuth] = React.useState(null);

  React.useEffect(() => {
    // fetch value using serviceFunctionCall or directly using axios
  }, []);

  return auth;
}
