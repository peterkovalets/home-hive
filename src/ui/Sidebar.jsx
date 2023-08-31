import { styled } from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';

const StyledSidebar = styled.aside`
  padding: 2.4rem 4rem;
  background-color: var(--color-gray-0);
  border-right: 1px solid var(--color-gray-200);
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />

      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
