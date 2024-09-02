import supabase from "../Supabase";

export const fetchUserData = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return user;
};

export const fetchUserProfile = async () => {
  const user = await fetchUserData();

  if (!user) {
    console.error('No user data available');
    return null;
  }

  const { data: profile, error } = await supabase
    .from('feed')
    .select('author_name, author_profile_url')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('Error fetching profile:', error);
    return null;
  }

  return profile;
};
