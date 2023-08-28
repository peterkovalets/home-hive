import { css, styled } from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: var(--color-brand-400);
  color: var(--color-brand-50);
  border: none;
  border-radius: var(--border-radius-sm);

  ${(props) =>
    props.size === 'small' &&
    css`
      padding: 0.6rem 1.2rem;
      font-size: 1.4rem;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      padding: 0.8rem 1.6rem;
    `}

  &:hover:not(:disabled) {
    background-color: var(--color-brand-500);
  }

  &:disabled {
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  size: 'medium',
};

export default Button;
