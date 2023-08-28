import { styled } from 'styled-components';
import UserAvatar from '../features/authentication/UserAvatar';
import LogoutButton from '../features/authentication/LogoutButton';

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <li>
        <UserAvatar />
      </li>
      <li>
        <LogoutButton />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
