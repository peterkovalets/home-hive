import { css, styled } from 'styled-components';

const Input = styled.input`
  padding: 0.8rem 1.6rem;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-sm);

  ${(props) =>
    props.error &&
    css`
      border-color: var(--color-red-500);
    `}
`;

export default Input;
