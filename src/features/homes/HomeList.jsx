import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import Empty from '../../ui/Empty';
import Error from '../../ui/Error';
import Spinner from '../../ui/Spinner';
import HomeItem from './HomeItem';
import { useHomes } from './useHomes';

const StyledHomeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

function HomeList() {
  const { homes, isLoading, error } = useHomes();
  const { type } = useParams();

  if (isLoading) return <Spinner />;

  if (error) return <Error>{error.message}</Error>;

  if (homes.length === 0) return <Empty resourceName={`places for ${type}`} />;

  return (
    <StyledHomeList>
      {homes.map((home) => (
        <HomeItem home={home} key={home.id} />
      ))}
    </StyledHomeList>
  );
}

export default HomeList;
