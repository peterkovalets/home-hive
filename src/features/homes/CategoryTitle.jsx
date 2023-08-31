import { useParams } from 'react-router-dom';
import Heading from '../../ui/Heading';

function CategoryTitle() {
  const { type } = useParams();

  return <Heading as="h1">Places for {type}</Heading>;
}

export default CategoryTitle;
