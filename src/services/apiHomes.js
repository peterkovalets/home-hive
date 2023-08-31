import supabase from './supabase';

export async function getHomes({ type }) {
  const { data, error } = await supabase
    .from('homes')
    .select(
      'id, name, type, numBedrooms, numBathrooms, regularPrice, images, address',
    )
    .eq('type', type);

  if (error) throw new Error('Could not get homes');

  return data;
}
