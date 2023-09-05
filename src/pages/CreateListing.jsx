import CreateListingForm from '../features/homes/CreateListingForm';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function CreateListing() {
  return (
    <Row>
      <Heading as="h1">Create a Listing</Heading>
      <CreateListingForm />
    </Row>
  );
}

export default CreateListing;
