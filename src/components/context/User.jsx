import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext(null);
const UserDispatchContext = createContext(null);

const initialState = {
  userId: '',
  nickname: '',
  profileUrl: ''
};

const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialState);
  // console.log('user: ', user);
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
    default:
      return state;
  }
};

export const userContext = () => {
  return useContext(UserContext);
};

export const userDispatchContext = () => {
  return useContext(UserDispatchContext);
};

export default UserProvider;
