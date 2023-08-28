import { styled } from 'styled-components';
import { useUser } from './useUser';

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

const Avatar = styled.img`
  width: 3.6rem;
  object-fit: cover;
  object-position: center;
  border: 2px solid var(--color-gray-200);
  border-radius: 50%;
`;

function UserAvatar() {
  const { user } = useUser();
  const { avatar, fullName } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
