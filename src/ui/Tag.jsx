import { styled } from 'styled-components';

const Tag = styled.p`
  padding: 0.6rem 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: var(--color-${(props) => props.color}-400);
  color: var(--color-gray-0);
  border-radius: var(--border-radius-lg);
`;

export default Tag;
