import React from 'react';
import { Btn } from './Button.style';
import { IProps } from './interface';
const Button: React.FC<IProps> = ({ type, children }): React.ReactElement => {
  return <Btn styleType={type}>{children}</Btn>;
};

export default Button;
