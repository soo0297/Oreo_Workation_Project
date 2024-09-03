import { useEffect } from 'react';
import supabase from '../Supabase';
import useDatabase from './useDatabase';

const useSession = () => {
  const { readUser } = useDatabase();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        const { user } = data.session;
        console.log('session: ', user);
        await readUser(user.id);
      }
    };

    checkSession();
  }, []);
};

export default useSession;
