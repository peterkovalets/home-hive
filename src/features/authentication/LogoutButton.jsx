import Button from '../../ui/Button';
import { useLogout } from './useLogout';

function LogoutButton() {
  const { logout, isLoading } = useLogout();

  return (
    <Button onClick={logout} disabled={isLoading} size="small">
      Log out
    </Button>
  );
}

export default LogoutButton;
