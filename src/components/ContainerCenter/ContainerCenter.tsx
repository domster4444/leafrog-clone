import React from 'react';
import styled from 'styled-components';

const ContainerCenterLayout = styled.div`
  display: flex;
  justify-content: center;
`;

interface IProps {
  children: React.ReactNode[] | React.ReactNode;
}

const ContainerCenter: React.FC<IProps> = ({
  children,
}): React.ReactElement => {
  return <ContainerCenterLayout>{children}</ContainerCenterLayout>;
};

export default ContainerCenter;
