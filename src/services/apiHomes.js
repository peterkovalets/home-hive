import supabase from './supabase';

export async function getHomes(type) {
  const { data, error } = await supabase
    .from('homes')
    .select(
      'id, name, type, num_bedrooms, num_bathrooms, regular_price, images, address',
    )
    .eq('type', type);

  if (error) throw new Error('Could not get homes');

  return data;
}

export async function getHome(id) {
  const { data, error } = await supabase
    .from('homes')
    .select('*, profiles(full_name, email)')
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not get home');

  return data;
}
