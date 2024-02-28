import { Button, Form, Input, Modal, Select, message } from 'antd'
import { useFormik } from 'formik';
import React from 'react'
import { https } from '../../../services/api';

export default function AddNewUser() {
    const closeModal = () => {
        Modal.destroyAll();
    }

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: "",
            maLoaiNguoiDung: "",
            maNhom: "GP01"
        },
        onSubmit: (values) => {
            console.log("submit with values: ", values);
            https.post("/api/QuanLyNguoiDung/ThemNguoiDung", values).then((res) => {
                console.log("add user: ", res.data);
                message.success("Thêm người dùng thành công!");
            }).catch((err) => {
                console.log("err", err);
                message.error(err.response.data);
            });
        }
    })

    const handleChangeSelect = (val) => {
        formik.setFieldValue("maLoaiNguoidung", val);
    }

    return (
        <Form
            layout='vertical'
            className='modal__addUser'
            initialValues={{
                remember: true
            }}
            onSubmitCapture={formik.handleSubmit}
        >
            <Form.Item label="Tài khoản">
                <Input placeholder='Nhập tài khoản' className='h-10' name='taiKhoan' value={formik.values.taiKhoan} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Mật khẩu">
                <Input placeholder='Nhập mật khẩu' className='h-10' name='matKhau' value={formik.values.matKhau} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Họ tên">
                <Input placeholder='Nhập họ tên' className='h-10' name='hoTen' value={formik.values.hoTen} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Số điện thoại">
                <Input placeholder='Nhập số điện thoại' className='h-10' name='soDT' value={formik.values.soDT} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Email">
                <Input placeholder='Nhập email' className='h-10' name='email' value={formik.values.email} onChange={formik.handleChange} />
            </Form.Item>
            <Form.Item label="Loại">
                <Select 
                    className='h-10' 
                    placeholder="Chọn loại người dùng" 
                    name='maLoaiNguoiDung'
                    options={[
                        {
                            value: "GV",
                            label: "Giáo vụ"
                        },
                        {
                            value: "HV",
                            label: "Học viên"
                        }
                    ]}
                    value={formik.maLoaiNguoiDung}
                    onChange={handleChangeSelect}
                />
            </Form.Item>

            {/* Buttons */}
            <div className='flex justify-end'>
                <Button onClick={closeModal}>Đóng</Button>
                <Button className='ml-2' style={{ backgroundColor: "#1d7a85", color: "white" }} htmlType='submit'>Thêm Người Dùng</Button>
            </div>
        </Form>
    )
}
