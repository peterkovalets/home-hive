import CategoryTitle from '../features/homes/CategoryTitle';
import HomeList from '../features/homes/HomeList';
import BackButton from '../ui/BackButton';
import Row from '../ui/Row';

function Category() {
  return (
    <Row>
      <div>
        <BackButton />
      </div>
      <CategoryTitle />
      <HomeList />
    </Row>
  );
}

export default Category;
