import { useEffect, useState } from 'react';
import supabase from '../Supabase';
import useDatabase from './useDatabase';
import { userDispatchContext } from '../context/User';

const useAuth = () => {
  // const [isSignedIn, setSignIn] = useState(false);
  const { createUser, readUser } = useDatabase();
  const dispatch = userDispatchContext();

  // 로그인 상태 확인
  // useEffect(() => {
  //   // handleSignOut();
  //   getSession();
  // }, []);

  // const getSession = async () => {
  //   try {
  //     const { data, error } = await supabase.auth.getSession();

  //     if (error) {
  //       // 에러 처리
  //       throw new Error(error.message);
  //     } else if (data.session) {
  //       // 성공 처리
  //       // console.log('data.session: ', data.session);
  //       const userId = data.session.user.id;
  //       data.session && userId && (await readUser(userId));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     alert('세션을 불러오는 도중 오류가 발생하였습니다.', err.message);
  //   }
  // };

  // 로그인 상태 변경
  // const handleAuthToggle = async () => {
  //   setSignIn((prev) => !prev);
  // };

  // 계정 등록
  const handleSignUp = async ({ email, password, nickname }, onSuccess) => {
    try {
      const { data } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      const userId = data.user.id;
      await createUser(userId, nickname);

      const { error } = await supabase.auth.signOut();

      data && onSuccess();
    } catch (err) {
      alert('계정 등록하는데 오류가 발생하였습니다.', err);
    }
  };

  // 로그인
  const handleSignIn = async ({ email, password }, onSuccess) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      const userId = data.user.id;
      await readUser(userId);

      if (error) {
        // 실패 시
        alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      } else if (data) {
        // 성공 시
        if (onSuccess && typeof onSuccess === 'function') {
          onSuccess(); // 델리게이트 실행
        }
      }
    } catch (err) {
      alert('네트워크 오류가 발생하였습니다.', err);
    }
  };

  // 로그아웃
  const handleSignOut = async (onSuccess) => {
    try {
      const { error } = await supabase.auth.signOut();

      dispatch({ type: 'initialize' });

      if (error) {
        // 실패 시
        alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      } else {
        // 성공 시
        if (onSuccess && typeof onSuccess === 'function') {
          onSuccess(); // 델리게이트 실행
        }
      }
    } catch (err) {
      console.log(err);
      alert('네트워크 오류가 발생하였습니다.', err);
    }
  };

  return { handleSignUp, handleSignIn, handleSignOut };
};

export default useAuth;
