import styled from 'styled-components';

interface IProps {
  styleType: 'primary' | 'secondary' | 'tertiary';
}

export const Btn = styled.button<IProps>`
  background: ${(props: IProps) =>
    props.styleType === 'primary'
      ? 'blue'
      : props.styleType === 'secondary'
      ? 'red'
      : 'green'};
`;
