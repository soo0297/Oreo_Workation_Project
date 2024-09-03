import { createContext, useContext, useEffect, useReducer } from 'react';
import useAuth from '../custom/useAuth';

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const initialState = {
  isSignedIn: false,
  userId: null,
  nickname: '',
  profileUrl: ''
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>{children}</UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'updated':
      return {
        ...state,
        ...action.payload
      };

    case 'initialize':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export function userContext() {
  return useContext(UserContext);
}

export const userDispatchContext = () => {
  return useContext(UserDispatchContext);
};

export default UserProvider;
