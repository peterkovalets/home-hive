import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpinnerFullPage from './SpinnerFullPage';
import { useUser } from '../features/authentication/useUser';

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) return navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <SpinnerFullPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
