import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getHome } from '../../services/apiHomes';

export function useHome() {
  const { id } = useParams();

  const {
    data: home,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['home', id],
    queryFn: () => getHome(id),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { home, isLoading, error };
}
