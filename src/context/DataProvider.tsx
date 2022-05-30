import React from 'react';
import { Provider, Consumer } from './context';

interface IProps {
  children: React.ReactNode;
}

const SingerProvider: React.FC<IProps> = ({ children }): React.ReactElement => {
  const [gblSinger, setGlobalSingers] = React.useState<string>('rita singer');

  const singerStates = {
    gblSinger,
    setGlobalSingers,
  };

  return <Provider value={singerStates}>{children}</Provider>;
};

export default SingerProvider;
