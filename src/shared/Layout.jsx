import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

const Header = () => {
    return <div></div>;
};

const Footer = () => {
    return <div></div>;
};

export default Layout;
