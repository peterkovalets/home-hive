import { styled } from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import { useUser } from './useUser';

const Box = styled.div`
  padding: 2.4rem;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & p {
    font-weight: 500;
  }

  & address {
    font-style: normal;
  }
`;

function PersonalDetails() {
  const { user, isLoading } = useUser();

  if (isLoading) return <Spinner />;

  const fullName = user.user_metadata.full_name;
  const { email } = user;

  return (
    <Row>
      <Heading as="h3">Personal Details</Heading>
      <Box>
        <p>Full Name: {fullName}</p>
        <address>Email: {email}</address>
      </Box>
    </Row>
  );
}

export default PersonalDetails;
