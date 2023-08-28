import { useState } from 'react';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';
import { useAuthRedirect } from './useAuthRedirect';
import { useLogin } from './useLogin';

function LoginForm() {
  useAuthRedirect();
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <p>
        Don&apos;t have an account yet?{' '}
        <LinkButton to="/register">Register</LinkButton>
      </p>
      <Button disabled={isLoading}>Log in</Button>
    </Form>
  );
}

export default LoginForm;
