import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navibar from '../components/Navibar';

const Layout = () => {
  return (
    <Container>
      <Navibar />
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Footer = styled.footer``;

export default Layout;
