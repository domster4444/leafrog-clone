import React from 'react';
import { Btn } from './Button.style';
import { IProps } from './interface';
// import { useSelector } from 'react-redux';

import { AiOutlineArrowRight } from 'react-icons/ai';

const Button: React.FC<IProps> = ({ type, children }): React.ReactElement => {
  // const postData = useSelector((state: any) => state.userPosts.postsD);

  return (
    <Btn className="poppins_semibold" styleType={type}>
      {children}

      <AiOutlineArrowRight />
    </Btn>
  );
};

export default Button;
