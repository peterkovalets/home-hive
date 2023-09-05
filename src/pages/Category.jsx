import { Link } from 'react-router-dom';
import CategoryTitle from '../features/homes/CategoryTitle';
import HomeList from '../features/homes/HomeList';
import BackButton from '../ui/BackButton';
import Button from '../ui/Button';
import Row from '../ui/Row';

function Category() {
  return (
    <Row>
      <Row type="horizontal">
        <BackButton />
        <Button as={Link} to="/create-listing">
          Sell/rent home
        </Button>
      </Row>
      <CategoryTitle />
      <HomeList />
    </Row>
  );
}

export default Category;
