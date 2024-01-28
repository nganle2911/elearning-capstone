import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { https } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  let navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values);
    https.post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        console.log(res);
        message.success("Đăng nhập thành công!")
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại!")
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='my-10'>
      <Form.Item
        style={{
          maxWidth: 500,
        }}
        className='container'
      >
        <div className='bg-yellow-400 flex justify-around font-bold text-white text-2xl rounded-t-xl py-1'>
          <div>
            <h1>Đăng nhập
              <hr />
            </h1>
          </div>
          <div className='text-gray-400'>
            <h1>Đăng kí</h1>
          </div>
        </div>
      </Form.Item>

      <Form
        className='container p-5 rounded-b-xl shadow-xl'
        name="basic"
        layout='vertical'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          offset: 0,
          span: 24,
        }}
        style={{
          maxWidth: 500,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tài khoản!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 0,
        span: 16,
      }}
    >
      <Checkbox className='to-orange-700'>Remember me</Checkbox>
    </Form.Item> */}

        <Form.Item
          wrapperCol={{
            offset: 0,
            span: 24,
          }}
        >
          <Button className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 text-white w-full font-bold text-lg items-center" type='button' htmlType="submit">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>


  )

};
export default FormLogin;