import { Link } from 'react-router-dom';
import BackButton from '../ui/BackButton';
import Button from '../ui/Button';
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import OfferList from '../features/homes/OfferList';

function Category() {
  return (
    <Row>
      <Row type="horizontal">
        <BackButton />
        <Button as={Link} to="/create-listing">
          Sell/rent home
        </Button>
      </Row>
      <Heading as="h1">Offers</Heading>
      <OfferList />
    </Row>
  );
}

export default Category;
