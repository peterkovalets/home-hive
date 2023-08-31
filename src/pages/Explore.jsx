import CategoryList from '../features/homes/CategoryList';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Explore() {
  return (
    <Row>
      <Heading as="h1">Explore</Heading>
      <CategoryList />
    </Row>
  );
}

export default Explore;
