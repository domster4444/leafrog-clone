//!  WRAPPER THAT PROVIDES data to all childrent wrapped by it.

import React, { useState } from 'react';
import { Provider } from './context';

interface IProps {
  children: React.ReactNode;
}

interface LoggedInUserData {
  name: string;
  accountType: 'free' | 'premium';
}

interface ITrackingState {
  loading: boolean;
  errorMessage: string;
}

const AuthProvider: React.FC<IProps> = ({ children }): React.ReactElement => {
  const [loggedInStatus, setLoggedInStatus] = useState<boolean>(false);
  const [loggedInData, setLoggedInData] = useState<LoggedInUserData>({
    name: 'dummy',
    accountType: 'free',
  });

  //*here  you can track   state,ie. loading,err,data using states
  let [state, setState] = useState<ITrackingState>({
    loading: false,
    errorMessage: '',
  });

  //!FETCH data & manupulate tracking state&SetState alongside
  //? use custom hook that utilizes method of services to get data

  //!SET data to "STATES"

  //! getting states data ready to be passed in <provider>
  const authStates = {
    loggedInStatus,
    loggedInData,
    setLoggedInStatus,
    setLoggedInData,
  };

  return <Provider value={authStates}>{children}</Provider>;
};

export default AuthProvider;
