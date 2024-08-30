import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navibar from '../components/Navibar';

const Layout = () => {
  return (
    <div>
      <Navibar />
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
};

const Footer = styled.footer``;

export default Layout;
