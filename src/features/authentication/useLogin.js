import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success('Successfully logged in');
      queryClient.setQueryData(['user'], user.user);
      navigate('/', { replace: true });
    },
    onError: () => {
      toast.error('Email or password is incorrect');
    },
  });

  return { login, isLoading };
}
