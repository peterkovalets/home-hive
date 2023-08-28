import { styled } from 'styled-components';

const StyledHeader = styled.header`
  padding: 2.4rem 4rem;
  background-color: var(--color-gray-0);
  border-bottom: 1px solid var(--color-gray-100);
  grid-template-columns: 1 / -1;
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
