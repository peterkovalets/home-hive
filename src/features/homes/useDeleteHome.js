import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteHome as deleteHomeApi } from '../../services/apiHomes';

export function useDeleteHome() {
  const queryClient = useQueryClient();

  const { mutate: deleteHome, isLoading: isDeleting } = useMutation({
    mutationFn: deleteHomeApi,
    onSuccess: () => {
      toast.success('Listing successfully deleted');
      queryClient.invalidateQueries(['homes']);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteHome, isDeleting };
}
