import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getPosition } from '../services/apiGeocoding';

export function usePosition(address) {
  const {
    data: position,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['position', address],
    queryFn: () => getPosition(address),
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { position, isLoading, error };
}
