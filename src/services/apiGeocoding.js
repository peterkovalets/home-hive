import axios from 'axios';

export async function getPosition(address) {
  try {
    const data = await axios.get(`https://geocode.maps.co/search?q=${address}`);
    return data.data;
  } catch {
    throw new Error('Could not get address location');
  }
}
