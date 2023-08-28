import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';

function RegisterForm() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          error={errors?.fullName?.message}
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
      </FormRow>
      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          error={errors?.email?.message}
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
          error={errors?.password?.message}
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
      >
        <Input
          type="password"
          error={errors?.passwordConfirm?.message}
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
      <Button>Create account</Button>
    </Form>
  );
}

export default RegisterForm;
