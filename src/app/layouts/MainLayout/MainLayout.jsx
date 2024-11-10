import React from 'react';
import {Layout, Menu} from 'antd'
import {Outlet} from "react-router-dom";

const {Header, Content,Footer} = Layout

const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

export const MainLayout = () => {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header style={{ display: 'flex', alignItems: 'center', position: 'fixed', zIndex: 100, left: 0, right: 0 }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0}}
                />
            </Header>

            <Content style={{
                padding: '74px 48px 0',
                width: '1000px',
                margin: '0 auto'
            }}>
                <Outlet />
            </Content>

            <Footer style={{ textAlign: 'center' }}>
                Created by M.Lantinov {new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

