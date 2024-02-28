import { Button, Form, Input, Modal, Select, message } from 'antd'
import { Option } from 'antd/es/mentions'
import React, { useState } from 'react'
import axios from 'axios';
import { TOKEN_CYBERSOFT } from '../../../services/constant';

export default function AddUser() {
    // const [formValue, setFormValue] = useState({});

    const closeModal = () => {
        Modal.destroyAll();
    }

    const addNewUser = async (values) => {
        console.log("new user");
        try {
            const authToken = JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken; 
            const res = await axios({
                method: "POST",
                url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
                data: {
                    taiKhoan: values.taiKhoan,
                    matKhau: values.matKhau,
                    hoTen: values.hoTen,
                    soDT: values.soDT,
                    email: values.email,
                    maLoaiNguoiDung: values.maLoaiNguoiDung,
                    maNhom: values.maNhom
                },
                headers: {
                    'Content-Type': 'application/json',
                    TokenCybersoft: TOKEN_CYBERSOFT,
                    Authorization: `Bearer ${authToken}`,
                }
            });
            
            console.log("new user: ", res.data);
            // setFormValue(res.data);
            message.success("Thêm thành công!");
        } catch (err) {
            console.log("err", err);
            message.error(err.response.data);
        }
        closeModal();
    }

    return (
        <Form
            layout='vertical'
            className='modal__addUser'
            initialValues={{
                remember: true
            }}
            onFinish={addNewUser}
        >
            <Form.Item label="Tài khoản">
                <Input placeholder='Nhập tài khoản' className='h-10' name='taiKhoan' />
            </Form.Item>
            <Form.Item label="Mật khẩu">
                <Input placeholder='Nhập mật khẩu' className='h-10' name='matKhau' />
            </Form.Item>
            <Form.Item label="Họ tên">
                <Input placeholder='Nhập họ tên' className='h-10' name='hoTen' />
            </Form.Item>
            <Form.Item label="Số điện thoại">
                <Input placeholder='Nhập số điện thoại' className='h-10' name='soDT' />
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder='Nhập email' className='h-10' name='email' />
            </Form.Item>
            <Form.Item label="Loại">
                <Select className='h-10' placeholder="Chọn loại người dùng" name='maLoaiNguoiDung'>
                    <Option value="GV">GV</Option>
                    <Option value="HV">HV</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Nhóm">
                <Select className='h-10' placeholder="Chọn nhóm" name='maNhom'>
                    <Option value="GP01">GP01</Option>
                    <Option value="GP02">GP02</Option>
                    <Option value="GP03">GP03</Option>
                    <Option value="GP04">GP04</Option>
                    <Option value="GP05">GP05</Option>
                    <Option value="GP06">GP06</Option>
                    <Option value="GP07">GP07</Option>
                    <Option value="GP08">GP08</Option>
                    <Option value="GP09">GP09</Option>
                </Select>
            </Form.Item>

            {/* Buttons */}
            <div className='flex justify-end'>
                <Button onClick={closeModal}>Đóng</Button>
                <Button className='ml-2' style={{backgroundColor: "#1d7a85", color: "white"}} htmlType='submit'>Thêm Người Dùng</Button>
            </div>
        </Form>
    )
}
