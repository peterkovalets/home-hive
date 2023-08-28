import { styled } from 'styled-components';
import Heading from '../ui/Heading';
import BackButton from '../ui/BackButton';

const StyledNotFound = styled.main`
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 48rem;
  width: 100%;
  padding: 2.4rem 4rem;
  background-color: var(--color-gray-200);
  border-radius: var(--border-radius-sm);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

const Headings = styled.div`
  text-align: center;
`;

function NotFound() {
  return (
    <StyledNotFound>
      <Wrapper>
        <Headings>
          <Heading as="h1">Error 404!</Heading>
          <Heading as="h2">Page Not Found 😢</Heading>
        </Headings>
        <BackButton />
      </Wrapper>
    </StyledNotFound>
  );
}

export default NotFound;
