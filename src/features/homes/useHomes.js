import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getHomes } from '../../services/apiHomes';

export function useHomes() {
  const { type } = useParams();

  const {
    data: homes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['homes', type],
    queryFn: () => getHomes({ type }),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { homes, isLoading, error };
}
