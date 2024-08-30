import { useEffect, useState } from 'react';
import supabase from '../Supabase';
import useDatabase from './useDatabase';

const useAuth = () => {
  const [isSignedIn, setSignIn] = useState(false);
  const { createUser, readUser } = useDatabase();

  // 로그인 상태 확인
  useEffect(() => {
    // 테스트를 위한 로그아웃(제거 예정)
    handleSignOut();
    getSession();
  }, []);

  const getSession = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      error && alert('세션을 불러오는 도중 오류가 발생하였습니다.', error);
      data.session && (await handleAuthToggle());

      const { _, _error } = supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
          const userId = session.user.id;
          readUser(userId);
        }
      });
      _error && alert('인증 상태 리스너에서 오류가 발생하였습니다.', error);
    } catch (err) {
      alert('세션을 불러오는 도중 오류가 발생하였습니다.', err);
    }
  };

  // 로그인 상태 변경
  const handleAuthToggle = async () => {
    setSignIn(true);
  };

  // 계정 등록
  const handleSignUp = async ({ email, password, nickname }, onSuccess) => {
    try {
      const { data } = await supabase.auth.signUp({
        email: email,
        password: password
      });

      const userId = data.user.id;
      await createUser(userId, nickname);

      data && onSuccess((prev) => !prev);
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

      await handleAuthToggle(data.session);

      if (error) {
        // 로그인 실패 시
        alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.');
      } else if (data) {
        // 로그인 성공 시
        if (onSuccess && typeof onSuccess === 'function') {
          onSuccess(); // 델리게이트 실행
        }
      }
    } catch (err) {
      alert('네트워크 오류가 발생하였습니다.', err);
    }
  };

  // 로그아웃
  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();

      error && alert('로그아웃 오류가 발생하였습니다.', error);
    } catch (err) {
      alert('네트워크 오류가 발생하였습니다.', err);
    }
  };

  return { isSignedIn, handleSignUp, handleSignIn, handleSignOut };
};

export default useAuth;
