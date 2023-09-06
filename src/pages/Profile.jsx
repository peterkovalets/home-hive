import PersonalDetails from '../features/authentication/PersonalDetails';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Profile() {
  return (
    <Row>
      <Heading as="h1">Profile</Heading>
      <PersonalDetails />
    </Row>
  );
}

export default Profile;
