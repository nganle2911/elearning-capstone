import React from 'react'
import { ButtonStyled } from '../../../components/ButtonStyled/ButtonStyled'
import { Space, Table, Tag } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default function UserMgt() {
    const columns = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: 'Tài khoản',
            dataIndex: 'account',
            key: 'account'
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Điều chỉnh',
            key: 'action',
            render: (_) => (
                <Space size="large">
                    <ButtonStyled>Ghi danh</ButtonStyled>
                    <a className='btnIcon btnEdit'><EditOutlined /></a>
                    <a className='btnIcon btnDel'><DeleteOutlined /></a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            account: 'john123',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            account: 'jim123',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            account: 'joe123',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
        },
    ];

    return (
        <div className='admin__userMgt'>
            <div className='userMgt__content'>
                <h1 className='uppercase text-2xl text-center font-semibold'>quản lý người dùng</h1>

                {/* button add */}
                <div className='userMgtCont__btnAdd'>
                    <ButtonStyled>Thêm người dùng</ButtonStyled>
                </div>

                {/* search bar */}
                <div className='userMgtCont__searchBar my-6 flex md:block'>
                    <input type='search' placeholder='Nhập tài khoản hoặc họ tên' className='searchIn__style h-10 w-full px-2 rounded' />
                    <ButtonStyled className='ml-4 md:mt-2 md:ml-0'>Tìm kiếm</ButtonStyled>
                </div>

                {/* table of users */}
                <div className='userMgtCont__table mt-12 mb-6'>
                    <Table className='tblContent' columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
                </div>
            </div>
        </div>
    )
}