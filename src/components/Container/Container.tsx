import React from 'react';
import styled, { css } from 'styled-components';
import ContainerCenter from 'components/ContainerCenter';

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  center?: boolean;
}

const LayoutContainer = styled.div`
  width: 122rem;

  /* for less than tablet */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container: React.FC<IProps> = ({ children }): React.ReactElement => {
  return (
    <ContainerCenter>
      <LayoutContainer>{children}</LayoutContainer>;
    </ContainerCenter>
  );
};

export default Container;
