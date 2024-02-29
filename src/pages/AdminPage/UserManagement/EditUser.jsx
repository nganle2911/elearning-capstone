import React, { useState } from 'react'
import { Button, Form, Input, Modal, Select, message } from 'antd'
import { https } from '../../../services/api';
import { ButtonStyled } from '../../../components/ButtonStyled/ButtonStyled';
import { TOKEN_CYBERSOFT } from '../../../services/constant';
import axios from 'axios';
import { useFormik } from 'formik';

export default function EditUser({ record, close }) {

    const [userData, setUserData] = useState(record);
    console.log("edit user: ", userData);

    // todo: function to handle changes in form fields
    const handleFieldChange = (name, value) => {
        setUserData({
            ...userData,
            [name]: value
        });
    };

    /* const onFinish = async (updatedData) => {
        try {
            const authToken = JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken;
            const res = await axios({
                method: "PUT",
                url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                headers: {
                    TokenCybersoft: TOKEN_CYBERSOFT,
                    Authorization: `Bearer ${authToken}`
                },
                data: {
                    email: updatedData.email,
                    taiKhoan: updatedData.taiKhoan,
                    hoTen: updatedData.hoTen,
                    soDt: updatedData.soDt,
                    matKhau: updatedData.matKhau,
                    maLoaiNguoiDung: updatedData.maLoaiNguoiDung,
                    maNhom: "GP01"
                }
            });
            setUserData(res.data);
            close();
        } catch (err) {
            console.log("err", err);
            message.error(err.response.data);
        }
    } */

    const formik = useFormik({
        initialValues: {
            taiKhoan: userData.taiKhoan,
            matKhau: userData.matKhau,
            hoTen: userData.hoTen,
            soDT: userData.soDT,
            email: userData.email,
            maLoaiNguoiDung: userData.maLoaiNguoiDung,
            maNhom: "GP01"
        },
        onSubmit: async (values) => {
            console.log("update values: ", values);
            try {
                const authToken = JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken;
                const res = await axios({
                    method: "PUT",
                    url: "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
                    headers: {
                        TokenCybersoft: TOKEN_CYBERSOFT,
                        Authorization: `Bearer ${authToken}`
                    },
                    data: {
                        email: values.email,
                        taiKhoan: values.taiKhoan,
                        hoTen: values.hoTen,
                        soDt: values.soDt,
                        matKhau: values.matKhau,
                        maLoaiNguoiDung: values.maLoaiNguoiDung,
                        maNhom: "GP01"
                    }
                });
                setUserData(res.data);
                close();
            } catch (err) {
                console.log("err", err);
                message.error(err.response.data);
            }
        }
    })

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChangeSelect = (val) => {
        formik.setFieldValue("maLoaiNguoidung", val);
    }

    const options = [{ value: "HV" }, { value: "GV" }];

    return (
        <Form
            layout='vertical'
            className='modal__addUser'
            labelCol={{
                span: 24,
            }}
            wrapperCol={{
                span: 24,
            }}
            // initialValues={{
            //     remember: true
            // }}

            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onFinish={formik.onSubmit}
        >
            <Form.Item label="Tài khoản">
                <Input placeholder='Nhập tài khoản' className='h-10' name='taiKhoan' value={formik.values.taiKhoan} disabled />
            </Form.Item>
            {/* <Form.Item label="Mật khẩu">
                <Input.Password placeholder='Nhập mật khẩu' className='h-10' name='matKhau' value={userData.matKhau} onChange={(e) => handleFieldChange('matKhau', e.target.value)} />
            </Form.Item> */}
            <Form.Item label="Mật khẩu">
                <Input.Password placeholder='Nhập mật khẩu' className='h-10' name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} />
            </Form.Item>
            {/* <Form.Item label="Họ tên">
                <Input placeholder='Nhập họ tên' className='h-10' name='hoTen' value={userData.hoTen} onChange={(e) => handleFieldChange('hoTen', e.target.value)} />
            </Form.Item> */}
            <Form.Item label="Họ tên">
                <Input placeholder='Nhập họ tên' className='h-10' name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} />
            </Form.Item>
            {/* <Form.Item label="Số điện thoại">
                <Input placeholder='Nhập số điện thoại' className='h-10' name='soDT' value={userData.soDt} onChange={(e) => handleFieldChange('soDt', e.target.value)} />
            </Form.Item> */}
            <Form.Item label="Số điện thoại">
                <Input placeholder='Nhập số điện thoại' className='h-10' name='soDT' value={userData.soDt} onChange={(e) => handleFieldChange('soDt', e.target.value)} />
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder='Nhập email' className='h-10' name='email' value={formik.values.email} onChange={formik.handleChange} />
            </Form.Item>
            {/* <Form.Item label="Loại">
                <Select className='h-10' options={options} name='maLoaiNguoiDung' value={userData.maLoaiNguoiDung} onChange={(value) => handleFieldChange('maLoaiNguoiDung', value)} />
            </Form.Item> */}
            <Form.Item label="Loại">
                <Select className='h-10' options={options} name='maLoaiNguoiDung' value={formik.values.maLoaiNguoiDung} onChange={handleChangeSelect} />
            </Form.Item>

            <div className='flex justify-end'>
                <ButtonStyled className='mt-3 w-full font-bold text-xl' style={{ backgroundColor: "#1d7a85", color: "white" }} htmlType='submit'>Update</ButtonStyled>
            </div>
        </Form>
    )
}
