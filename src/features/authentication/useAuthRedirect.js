import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';

export function useAuthRedirect() {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) return navigate('/');
  }, [isAuthenticated, navigate]);
}
