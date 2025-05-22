import React from 'react';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import { Content, LayoutContainer } from './style';

interface LayoutProps {
    children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutContainer>
            <Sidebar />
            <div style={{ flex: 1, width: '100%' }}>
                <Navbar />
                <Content>{children}</Content>
            </div>
        </LayoutContainer>
    );
}

export default Layout;