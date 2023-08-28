import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';

export function useAuthRedirect() {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading) return navigate('/');
  }, [isAuthenticated, isLoading, navigate]);
}
