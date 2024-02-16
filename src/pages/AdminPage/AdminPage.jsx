import React from 'react';
import { Layout, Tabs, theme } from 'antd';
const { Content } = Layout;

const items = [
    {
        key: '1',
        label: 'Courses Management',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Users Management',
        children: 'Content of Tab Pane 2',
    },
];

const onChange = (key) => {
    console.log(key);
};

export default function AdminPage() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className='pt-24'>
            <Content
                style={{
                    padding: '0 48px',
                    margin: '48px 0'
                }}
            >
                <Layout
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Tabs className='admin__content' defaultActiveKey='1' items={items} onChange={onChange} tabPosition='left' />
                </Layout>
            </Content>
        </Layout>
    );
}