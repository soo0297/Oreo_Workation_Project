// import { useCallback } from 'react';

// const useAuthStorage = () => {
//   const setSignInFlag = useCallback(async (key, value) => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, []);

//   const getSignInFlag = useCallback(() => {
//     const item = localStorage.getItem('signInFlag');
//     return item ? JSON.parse(item) : null;
//   }, []);

//   const removeSignInFlag = useCallback(async (key) => {
//     localStorage.removeItem(key);
//   }, []);

//   return { setSignInFlag, getSignInFlag, removeSignInFlag };
// };

// export default useAuthStorage;
