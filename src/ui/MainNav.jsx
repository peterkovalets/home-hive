import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { FaRegCompass, FaRegUser } from 'react-icons/fa6';
import { MdOutlineLocalOffer } from 'react-icons/md';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Item = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Link = styled(NavLink)`
  padding: 1.2rem 8rem 1.2rem 2rem;
  color: var(--color-gray-500);
  border-radius: var(--border-radius-sm);
  text-decoration: none;
  transition:
    background-color 0.3s,
    color 0.3s;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  & svg {
    color: var(--color-gray-600);
    width: 2rem;
    height: 2rem;
    transition: color 0.3s;
  }

  &:hover,
  &.active {
    background-color: var(--color-gray-50);
    color: var(--color-gray-700);

    & svg {
      color: var(--color-brand-400);
    }
  }
`;

function MainNav() {
  return (
    <nav>
      <List>
        <Item>
          <Link to="/explore">
            <FaRegCompass />
            <span>Explore</span>
          </Link>
        </Item>
        <Item>
          <Link to="/offers">
            <MdOutlineLocalOffer />
            <span>Offers</span>
          </Link>
        </Item>
        <Item>
          <Link to="/profile">
            <FaRegUser />
            <span>Profile</span>
          </Link>
        </Item>
      </List>
    </nav>
  );
}

export default MainNav;
