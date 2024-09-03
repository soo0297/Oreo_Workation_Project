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
        profile_url: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png' // Default 값
      };

      const { error } = await supabase.from('user').insert(data);
    } catch (err) {
      console.log(err);
      alert('데이터베이스를 불러오는데 오류가 발생하였습니다.', err);
    }
  };

  // 사용자 계정 불러오기
  const readUser = async (userId) => {
    try {
      const { data, error } = await supabase.from('user').select().eq('user_id', userId).single();
      console.log('readUser: ', data);

      const { user_id, nickname, profile_url } = data;

      if (error) {
        console.log(error);
      } else if (data) {
        const payload = {
          isSignedIn: true,
          userId: user_id,
          nickname: nickname,
          profileUrl: profile_url
        };

        dispatch({
          type: 'updated',
          payload: payload
        });
      }
    } catch (err) {
      console.log(err);
      alert('데이터베이스를 불러오는데 오류가 발생하였습니다.', err);
    }
  };

  // 내 피드 불러오기
  const readFeeds = async (userId) => {
    try {
      const { data, error } = await supabase.from('feed').select('*').eq('author_id', userId);

      const parsedata = data.map((feed) => {
        return {
          ...feed,
          img_url: JSON.parse(feed.img_url)
        };
      });
      return parsedata;
    } catch (err) {
      console.log(err);
      alert('데이터베이스를 불러오는데 오류가 발생하였습니다.', err);
    }
  };

  // 피드 업데이트
  const updateFeedFromDatabase = async (feed, onSuccess) => {
    try {
      const { error } = await supabase
        .from('feed')
        .update({ title: feed.title, content: feed.content })
        .eq('id', feed.id);

      if (error) {
      } else {
        onSuccess();
      }
    } catch (err) {
      console.log(err);
      alert('데이터베이스 업데이트 오류!');
    }
  };

  const deleteFeedFromDatabase = async (feed, onSuccess) => {
    const response = await supabase.from('feed').delete().eq('id', feed.id);

    console.log('response: ', response);

    response.status === 204 && onSuccess();
  };

  return { createUser, readUser, readFeeds, updateFeedFromDatabase, deleteFeedFromDatabase };
};

export default useDatabase;
