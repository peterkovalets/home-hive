import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { MdBathtub, MdBed } from 'react-icons/md';
import Heading from '../../ui/Heading';
import { formatCurrency } from '../../utils/helpers';

const StyledHomeItem = styled.div`
  display: grid;
  grid-template-columns: 38rem 1fr;
  grid-template-rows: 22rem;
  align-items: center;
  gap: 3.2rem;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius-lg);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & address {
    font-style: normal;
  }

  & strong {
    color: var(--color-brand-400);
  }
`;

const Rooms = styled.div`
  display: flex;
  gap: 2.4rem;

  & div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

function HomeItem({ home }) {
  const {
    id,
    images,
    name,
    numBathrooms,
    numBedrooms,
    regularPrice,
    type,
    address,
  } = home;

  return (
    <Link to={`/homes/${id}`}>
      <StyledHomeItem>
        <Image src={images[0]} alt={name} />

        <Content>
          <address>{address}</address>
          <Heading as="h3">{name}</Heading>
          <strong>{`${formatCurrency(regularPrice)} ${
            type === 'rent' ? '/ Month' : ''
          }`}</strong>
          <Rooms>
            <div>
              <MdBed />
              <span>{numBedrooms} Bedrooms</span>
            </div>
            <div>
              <MdBathtub />
              <span>{numBathrooms} Bathrooms</span>
            </div>
          </Rooms>
        </Content>
      </StyledHomeItem>
    </Link>
  );
}

export default HomeItem;
