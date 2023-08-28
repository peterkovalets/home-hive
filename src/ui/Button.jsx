import { styled } from 'styled-components';

const Button = styled.button`
  padding: 0.8rem 1.6rem;
  display: inline-block;
  background-color: var(--color-brand-400);
  color: var(--color-brand-50);
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover {
    background-color: var(--color-brand-500);
  }
`;

export default Button;
