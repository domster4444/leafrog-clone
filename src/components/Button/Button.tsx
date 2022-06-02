import React from 'react';
import { Btn } from './Button.style';
import { IProps } from './interface';
import { useSelector } from 'react-redux';
const Button: React.FC<IProps> = ({ type, children }): React.ReactElement => {
  const postData = useSelector((state: any) => state.userPosts.postsD);

  return (
    <Btn styleType={type}>
      {children}

      {postData && <>{postData[0].title}</>}
    </Btn>
  );
};

export default Button;
