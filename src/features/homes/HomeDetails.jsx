import { styled } from 'styled-components';
import Error from '../../ui/Error';
import Spinner from '../../ui/Spinner';
import Row from '../../ui/Row';
import HomeLocation from './HomeLocation';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import HomeSlider from './HomeSlider';
import { useHome } from './useHome';
import { useTitle } from '../../hooks/useTitle';
import { formatCurrency } from '../../utils/helpers';

const StyledHomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & address {
    font-style: normal;
  }
`;

function HomeDetails() {
  const { home, isLoading, error } = useHome();
  const {
    name,
    regular_price: regularPrice,
    address,
    images,
    num_bedrooms: numBedrooms,
    num_bathrooms: numBathrooms,
    has_parking_spot: hasParkingSpot,
    is_furnished: isFurnished,
    profiles,
  } = home || {};
  useTitle(name);

  if (isLoading) return <Spinner />;

  if (error) return <Error>{error.message}</Error>;

  const { full_name: fullName, email } = profiles;

  return (
    <StyledHomeDetails>
      <HomeSlider images={images} name={name} />

      <Row>
        <div>
          <Heading as="h2">
            {name} &mdash; {formatCurrency(regularPrice)}
          </Heading>
          <address>{address || 'Address is hidden'}</address>
        </div>

        <div>
          <p>{numBedrooms} Bedrooms</p>
          <p>{numBathrooms} Bathrooms</p>
          {hasParkingSpot && <p>Parking Spot</p>}
          {isFurnished && <p>Furnished</p>}
        </div>
      </Row>

      <HomeLocation address={address} name={name} fullName={fullName} />

      <div>
        <Button as="a" href={`mailto:${email}`}>
          Contact {fullName}
        </Button>
      </div>
    </StyledHomeDetails>
  );
}

export default HomeDetails;
