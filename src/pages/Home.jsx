import HomeDetails from '../features/homes/HomeDetails';
import BackButton from '../ui/BackButton';
import Row from '../ui/Row';

function Home() {
  return (
    <Row>
      <div>
        <BackButton />
      </div>
      <HomeDetails />
    </Row>
  );
}

export default Home;
