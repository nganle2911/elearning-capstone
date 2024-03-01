import { Button, Select, Space, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { https } from "../../../services/api";
import { ButtonStyled } from "../../../components/ButtonStyled/ButtonStyled";

export default function FormRegister({ record }) {
  console.log(record);
  const [currentPage, setCurrentPage] = useState(1);
  const [awaitingUser, setAwaitingUser] = useState([]);
  const [unregisteredUser, setUnregisteredUser] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // fetch unregistered user when component mounts
    getUnregisteredUsers(record.maKhoaHoc);

    // fetch awaiting users
    //   getAwaitingUsers(record.maKhoaHoc);
  }, [record.maKhoaHoc]);

  const getUnregisteredUsers = (course) => {
    let data = {
      maKhoaHoc: record.maKhoaHoc,
      maNhom: record.maNhom,
    };

    https
      .post("api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh", data)
      .then((res) => {
        console.log("danh sách chưa ghi danh", res.data);
        setUnregisteredUser(res.data);

        const optionsArr = res.data.map((user) => {
          return {
            label: user.maKhoaHoc,
            value: user.maKhoaHoc,
          };
        });
        setOptions(optionsArr);
      })
      .catch((err) => {
        console.log("err", err);
        message.error(err.response.data);
      });
  };

  // todo: handle change on selection
  const handleCourseSelection = (selectedValue) => {
    setSelectedUser(selectedValue);
  };
  const dataAwait = [
    {
      title: "STT",
      dataIndex: "order",
      key: "order",
      render: (_, __, index) => (currentPage - 1) * 5 + index + 1,
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Học viên",
      dataIndex: "biDanh",
      key: "biDanh",
    },
    {
      title: "Chờ xác nhận",
      dataIndex: "choXacNhan",
      key: "choXacNhan",
      render: (_, record) => (
        <>
          <Space size="large">
            {/* Authentication */}
            <Button
            // onClick={() => {
            //   authCourse(record, data.taiKhoan);
            // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </Button>

            {/* Delete */}
            <Button
            // onClick={() => {
            //   deleteEnrolledCourse(record, data.taiKhoan);
            // }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
                className="w-6 h-6 text-red-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </Button>
          </Space>
        </>
      ),
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div className="userEnrollment mt-3">
      {/* choose course */}
      <div className="chooseCourse">
        <h3 className="text-xl capitalize font-medium mb-3">
          chọn tên người dùng
        </h3>
        <div className="chooseCourse flex justify-between items-center">
          <Select
            placeholder="Chọn tên người dùng"
            className="h-10 w-full"
            options={options}
            onChange={handleCourseSelection}
          />
          <ButtonStyled
            className="ml-3 uppercase w-28"
            onClick={() => {
              // authCourseOnSearch(data.taiKhoan);
            }}
          >
            ghi danh
          </ButtonStyled>
        </div>
      </div>
      <hr className="my-8" />

      {/* User awaiting validation */}
      <div className="styleCustom awaitingCourse">
        <h3 className="text-xl font-medium capitalize mb-3">
          Học viên chờ xác thực
        </h3>
        <Table
          className="tblStyle tblAwaitCourse"
          columns={dataAwait}
          dataSource={awaitingUser}
          pagination={{
            pageSize: 5,
            onChange: (page, pageSize) => {
              setCurrentPage(page);
            },
          }}
        />
      </div>
      <hr className="my-8" />

      <Table dataSource={dataAwait} columns={columns} />
      <hr />
      <h1 className="titleTableRegister">Học viên đã tham gia khóa học</h1>
      <Table dataSource={dataSource2} columns={columns} />
    </div>
  );
}
