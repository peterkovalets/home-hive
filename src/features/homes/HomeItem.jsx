import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { MdBathtub, MdBed } from 'react-icons/md';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useUser } from '../authentication/useUser';
import { useDeleteHome } from './useDeleteHome';
import { formatCurrency } from '../../utils/helpers';
import supabase from '../../services/supabase';

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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  const { user } = useUser();
  const { deleteHome, isDeleting } = useDeleteHome();
  const { id: userId } = user;
  const {
    id,
    name,
    images,
    num_bathrooms: numBathrooms,
    num_bedrooms: numBedrooms,
    regular_price: regularPrice,
    discount,
    type,
    address,
    user_id: homeUserId,
  } = home;

  return (
    <Link to={`/homes/${id}`}>
      <StyledHomeItem>
        <Image
          src={
            supabase.storage.from('home-images').getPublicUrl(images[0]).data
              .publicUrl
          }
          alt={`Photo of ${name}`}
        />

        <Wrapper>
          <Content>
            <address>{address || 'Address is hidden'}</address>
            <Heading as="h3">{name}</Heading>
            <strong>{`${formatCurrency(regularPrice - discount)} ${
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
          {userId === homeUserId && (
            <div
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Modal>
                <Modal.Open opens="delete">
                  <Button variant="danger">Delete</Button>
                </Modal.Open>

                <Modal.Window name="delete">
                  <ConfirmDelete
                    resourceName="listing"
                    disabled={isDeleting}
                    onConfirm={() => deleteHome(id)}
                  />
                </Modal.Window>
              </Modal>
            </div>
          )}
        </Wrapper>
      </StyledHomeItem>
    </Link>
  );
}

export default HomeItem;
