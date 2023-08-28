import { styled } from 'styled-components';
import HeaderMenu from './HeaderMenu';

const StyledHeader = styled.header`
  padding: 2.4rem 4rem;
  background-color: var(--color-gray-0);
  border-bottom: 1px solid var(--color-gray-200);
  grid-template-columns: 1 / -1;

  display: flex;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
