import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { styled } from 'styled-components';
import Heading from '../../ui/Heading';
import Row from '../../ui/Row';
import Spinner from '../../ui/Spinner';
import { usePosition } from '../../hooks/usePosition';

const Map = styled.div`
  height: 30rem;
  border-radius: var(--border-radius-lg);
  overflow: hidden;

  & .leaflet-container {
    height: 100%;
  }

  & .leaflet-popup-content {
    font-size: 1.4rem;
  }
`;

function HomeLocation({ address, name, fullName }) {
  const { position: positionRaw, isLoading } = usePosition(address);

  if (isLoading) return <Spinner />;

  const position = [positionRaw?.at(0)?.lat, positionRaw?.at(0)?.lon];

  if (!position[0] || !position[1])
    return (
      <p>Address is unavailable. Please contact {fullName} for details.</p>
    );

  return (
    <Row>
      <Heading as="h3">Location</Heading>

      {
        <Map>
          <MapContainer center={position} zoom={15}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.fr/hot/org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{name}</Popup>
            </Marker>
          </MapContainer>
        </Map>
      }
    </Row>
  );
}

export default HomeLocation;
