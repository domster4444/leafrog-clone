import styled, { css } from 'styled-components';

interface IProps {
  styleType: 'primary' | 'secondary' | 'tertiary';
}

export const Btn = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: none;

  ${(props: IProps) => {
    if (props.styleType === 'primary') {
      return css`
        color: white;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        border-radius: 5rem;
        background: var(--primary-navy);
      `;
    } else if (props.styleType === 'secondary') {
      return css`
        color: white;
        min-width: 18rem;
        border: 4px solid transparent;
        padding: 1rem 1rem;
        font-size: 1.2rem;
        border-radius: 5rem;
        background: var(--primary-green);
        &:hover {
          background: var(--primary-dark-green);
        }
      `;
    }
  }}

  svg {
    margin: 0rem 0.35rem;
  }
`;
