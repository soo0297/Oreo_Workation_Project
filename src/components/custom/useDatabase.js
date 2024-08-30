import { userDispatchContext } from '../context/User';
import supabase from '../Supabase';

const useDatabase = () => {
  const dispatch = userDispatchContext();

  // 사용자 계정 생성
  const createUser = async (userId, nickname) => {
    try {
      const data = {
        user_id: userId,
        nickname: nickname,
        profile_url: ''
      };

      const { error } = await supabase.from('user').insert(data);
    } catch (err) {
      alert('데이터베이스를 불러오는데 오류가 발생하였습니다.', err);
    }
  };

  // 사용자 계정 불러오기
  const readUser = async (userId) => {
    try {
      const { data, error } = await supabase.from('user').select().eq('user_id', userId).single();

      const { user_id, nickname, profile_url } = data;

      dispatch({
        type: 'updated',
        payload: { userId: user_id, nickname: nickname, profileUrl: profile_url }
      });
    } catch (err) {
      console.log(err);
      alert('데이터베이스를 불러오는데 오류가 발생하였습니다.', err);
    }
  };

  return { createUser, readUser };
};

export default useDatabase;
