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

export async function createHome(newHome) {
  const images = [];

  for (const file of newHome.images) {
    const filePath = `${Math.random()}-${file.name}`.replaceAll('/', '');
    const { data: fileData, error: fileError } = await supabase.storage
      .from('home-images')
      .upload(filePath, file);

    if (fileError) {
      throw new Error('Could not upload images');
    }

    images.push(fileData.path);
  }

  const { data: userData } = await supabase.auth.getUser();

  const { data: homeData, error: homeError } = await supabase
    .from('homes')
    .insert([{ ...newHome, images, user_id: userData.user.id }])
    .select()
    .single();

  if (homeError) throw new Error('Could not create listing');

  return homeData;
}
