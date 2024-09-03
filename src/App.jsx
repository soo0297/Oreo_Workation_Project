import Router from './shared/Router';
import UserProvider from './components/context/User';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
