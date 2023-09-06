import { styled } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Heading from './Heading';
import Button from './Button';

const StyledErrorFallback = styled.main`
  min-height: 100vh;
  background-color: var(--color-gray-100);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  padding: 4.8rem;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-gray-500);
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">Something went wrong</Heading>
          <p>{error.message}</p>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
