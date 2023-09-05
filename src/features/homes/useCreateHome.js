import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createHome as createHomeApi } from '../../services/apiHomes';

export function useCreateHome() {
  const navigate = useNavigate();

  const { mutate: createHome, isLoading: isCreating } = useMutation({
    mutationFn: createHomeApi,
    onSuccess: (data) => {
      toast.success('Listing successfully created');
      navigate(`/homes/${data.id}`);
    },
  });

  return { createHome, isCreating };
}
