import { Table } from "antd";
import React, { useEffect } from "react";
import { https } from "../../../services/api";

export default function FormRegister() {
  useEffect(() => {
    // https.post("/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh")
  }, []);
  const dataSource1 = [
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
    <div>
      <h1 className="titleTableRegister">Học viên chờ xác thực</h1>
      <Table dataSource={dataSource1} columns={columns} />
      <hr />
      <h1 className="titleTableRegister">Học viên đã tham gia khóa học</h1>
      <Table dataSource={dataSource2} columns={columns} />
    </div>
  );
}
