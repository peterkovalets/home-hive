import { css, styled } from 'styled-components';

const sizes = {
  small: css`
    padding: 0.6rem 1.2rem;
    font-size: 1.4rem;
  `,
  medium: css`
    padding: 0.8rem 1.6rem;
  `,
};

const variants = {
  primary: css`
    background-color: var(--color-brand-400);
    color: var(--color-brand-50);

    &:hover:not(:disabled) {
      background-color: var(--color-brand-500);
    }
  `,
  danger: css`
    background-color: var(--color-red-500);
    color: var(--color-red-50);

    &:hover:not(:disabled) {
      background-color: var(--color-red-600);
    }
  `,
  outline: css`
    background-color: transparent;
    color: var(--color-gray-500);
    border: 1px solid var(--color-gray-500);
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover:not(:disabled) {
      background-color: var(--color-gray-500);
      color: var(--color-gray-0);
    }
  `,
};

const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: var(--border-radius-sm);
  text-decoration: none;

  ${(props) => sizes[props.size]}
  ${(props) => variants[props.variant]}

  &:disabled {
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
};

export default Button;
