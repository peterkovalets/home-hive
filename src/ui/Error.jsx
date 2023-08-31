import { styled } from 'styled-components';

const Error = styled.p`
  max-width: 48rem;
  width: 100%;
  margin: 4.8rem auto;
  padding: 4.8rem 1.2rem;
  background-color: var(--color-red-200);
  color: var(--color-red-500);
  border: 1px solid var(--color-red-500);
  border-radius: var(--border-radius-sm);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Error;
