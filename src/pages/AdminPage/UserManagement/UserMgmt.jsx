import React, { useEffect, useState } from 'react'
import { ButtonStyled } from '../../../components/ButtonStyled/ButtonStyled'
import { Space, Table, message } from 'antd'
import { https } from '../../../services/api'

export default function UserMgt() {
    let [userList, setUserList] = useState([]);

    // todo: fetch user list 
    const fetchUserList = async () => {
        try {
            let res = await https.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01");
            setUserList(res.data);
        } catch (err) {
            console.log("err", err);
        }
    }

    // todo: handle delete user
    const handleDeleteUser = async (account) => {
        try {
            await https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${account}`);
            fetchUserList();
            message.success("Xoá thành công!");
        } catch (err) {
            message.error(err.response.data);
        }
    }

    useEffect(() => {
        fetchUserList();
    }, []);

    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            key: 'account'
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'name'
        },
        {
            title: 'Chức vụ',
            dataIndex: 'maLoaiNguoiDung',
            key: 'role',
            render: (role) => {
                if (role === "GV") {
                    return <div className='px-1 text-base text-center rounded' style={{backgroundColor: "#aeaeaf"}}>{role}</div>
                } else {
                    return <div className='px-1 text-base text-center rounded' style={{ backgroundColor: "rgba(255, 191, 0, 0.7)"}}>{role}</div>
                }
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            key: 'soDt',
        },
        {
            title: 'Điều chỉnh',
            key: 'action',
            render: (_, record) => (
                <Space size="large">
                    <ButtonStyled className='w-24'>Ghi danh</ButtonStyled>
                    <button className='btnEdit'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                    <button className='btnDel' onClick={() => {
                        handleDeleteUser(record.taiKhoan);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </Space>
            ),
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
                    <ButtonStyled className='w-28 ml-4 md:mt-2 md:ml-0'>Tìm kiếm</ButtonStyled>
                </div>

                {/* table of users */}
                <div className='userMgtCont__table mt-12 mb-6'>
                    <Table className='tblContent' columns={columns} dataSource={userList} pagination={{ pageSize: 10 }} />
                </div>
            </div>
        </div>
    )
}