import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';
import { useAuthRedirect } from './useAuthRedirect';
import { useRegister } from './useRegister';

function RegisterForm() {
  useAuthRedirect();
  const { register: registerAccount, isLoading } = useRegister();
  const { register, handleSubmit, getValues, formState, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    registerAccount(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          error={errors?.fullName?.message}
          disabled={isLoading}
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          error={errors?.email?.message}
          disabled={isLoading}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Email is not valid',
            },
          })}
        />
      </FormRow>
      <FormRow label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          error={errors?.password?.message}
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 6,
              message: 'Password should contain at least 6 symbols',
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
        disabled={isLoading}
      >
        <Input
          type="password"
          id="passwordConfirm"
          error={errors?.passwordConfirm?.message}
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords do not match',
          })}
        />
      </FormRow>
      <p>
        Already have an account? <LinkButton to="/login">Login</LinkButton>
      </p>
      <Button disabled={isLoading}>Create account</Button>
    </Form>
  );
}

export default RegisterForm;
