import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

const Header = () => {
  return <header></header>;
};

const Footer = () => {
  return <footer></footer>;
};

export default Layout;
