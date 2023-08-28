import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { register as registerApi } from '../../services/apiAuth';

export function useRegister() {
  const { mutate: register, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      registerApi({ fullName, email, password }),
    onSuccess: () => {
      toast.success(
        'Account successfully created! Please verify your email address',
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { register, isLoading };
}
