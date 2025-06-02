import React from 'react';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import { Content, LayoutContainer } from './style';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <LayoutContainer>
            <Sidebar />
            <div style={{ flex: 1, width: '100%' }}>
                <Navbar />
                <Content><Outlet /></Content>
            </div>
        </LayoutContainer>
    );
}

export default Layout;