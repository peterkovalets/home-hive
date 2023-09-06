import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { getOffers } from '../../services/apiHomes';

export function useOffers() {
  const {
    data: offers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['offers'],
    queryFn: getOffers,
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { offers, isLoading, error };
}
