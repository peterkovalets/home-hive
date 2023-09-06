import { styled } from 'styled-components';
import Empty from '../../ui/Empty';
import Error from '../../ui/Error';
import Spinner from '../../ui/Spinner';
import HomeItem from './HomeItem';
import { useOffers } from './useOffers';

const StyledOfferList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

function OfferList() {
  const { offers, isLoading, error } = useOffers();

  if (isLoading) return <Spinner />;

  if (error) return <Error>{error.message}</Error>;

  if (offers.length === 0) return <Empty resourceName="offers" />;

  return (
    <StyledOfferList>
      {offers.map((offer) => (
        <HomeItem home={offer} key={offer.id} />
      ))}
    </StyledOfferList>
  );
}

export default OfferList;
