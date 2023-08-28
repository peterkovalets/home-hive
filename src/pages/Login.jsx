import LoginForm from '../features/authentication/LoginForm';
import Heading from '../ui/Heading';

function Login() {
  return (
    <>
      <Heading as="h3">Login</Heading>
      <LoginForm />
    </>
  );
}

export default Login;
