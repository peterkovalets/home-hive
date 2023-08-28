import { styled } from 'styled-components';
import Logo from './Logo';

const StyledSidebar = styled.aside`
  padding: 2.4rem 4rem;
  background-color: var(--color-gray-0);
  border-right: 1px solid var(--color-gray-200);
  grid-row: 1 / -1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
}

export default Sidebar;
