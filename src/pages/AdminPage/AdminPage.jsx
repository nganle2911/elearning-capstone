import React from 'react';
import { Layout, Result, Tabs, theme } from 'antd';
import CourseManagement from './CourseManagement/CourseManagement';
import UserMgmt from './UserManagement/UserMgmt';
import { useSelector } from 'react-redux';
import { ButtonStyled } from '../../components/ButtonStyled/ButtonStyled';
import { NavLink } from 'react-router-dom';
const { Content } = Layout;

const items = [
    {
        key: '1',
        label: 'Quản lý khoá học',
        children: <CourseManagement/>,
    },
    {
        key: '2',
        label: 'Quản lý người dùng',
        children: <UserMgmt />,
    },
];

const onChange = (key) => {
    console.log(key);
};

export default function AdminPage() {
    const { user } = useSelector(state => state.userSlice);

    // todo: render admin content depending on type of user
    const renderAdContent = () => {
        if (user) {
            if (user.maLoaiNguoiDung === "GV") {
                return (
                    <>
                        <Tabs className='adPage__tabs md:hidden' defaultActiveKey='1' items={items} onChange={onChange} tabPosition='left' />

                        {/* Tabs for mobile screen */}
                        <Tabs className='adPageMobile__tabs mx-6 hidden md:block' defaultActiveKey='1' items={items} onChange={onChange} tabPosition="top" />
                    </>
                );
            } else {
                return (
                    <Result
                        status="403"
                        title="403"
                        subTitle="Xin lỗi, bạn không được phép truy cập trang này!"
                        extra={<NavLink to={"/"}>
                            <ButtonStyled>Về trang chủ</ButtonStyled>
                        </NavLink>}
                    />
                );
            }
        }
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className='adminPage pt-24'>
            <Content
                className='adminPage__content'
                style={{
                    padding: '0 48px',
                    margin: '48px 0'
                }}
            >
                <Layout
                    className='adPageCont'
                    style={{
                        padding: '24px 0',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {renderAdContent()}
                </Layout>
            </Content>
        </Layout>
    );
}