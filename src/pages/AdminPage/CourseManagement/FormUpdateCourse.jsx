import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  message,
} from "antd";
import { ButtonStyled } from "../../../components/ButtonStyled/ButtonStyled";
import { https } from "../../../services/api";

export default function FormUpdateCourse({ record }) {
  const [courseUpdate, setCourseUpdate] = useState(record);
  let dataJson = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const { TextArea } = Input;
  const [category, setCategory] = useState([]);
  const [options, setOptions] = useState([]);
  let dataJson = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const { TextArea } = Input;
  console.log("courseUpdate", courseUpdate);

  // todo: get category list
  const getCategory = () => {
    https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc").then((res) => {
      setCategory(res.data);

      // generate options array from category
      const optionsArr = res.data.map((course) => {
        return {
          value: course.maDanhMuc,
          label: course.tenDanhMuc
        }
      });
      setOptions(optionsArr);
      console.log("options", optionsArr);
    }).catch((err) => {
      console.log("err", err);
    });
  }

  useEffect(() => {
    getCategory();
    setCourseUpdate({
      ...courseUpdate,
      maDanhMucKhoahoc: courseUpdate.danhMucKhoaHoc.maDanhMucKhoahoc
    })
  }, []);

  //Chuyển đổi tên file hình ảnh
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    const fileList = e && e.fileList;
    const fileName = fileList && fileList.length > 0 && fileList[0].name;

    return fileName;
  };

  /* let handleChange = (e) => {
    let { name, value } = e.target ?? {};
    let data = { ...courseUpdate, [name]: value };
    // setCourseUpdate(data);
  }; */

  const handleChange = (name, value) => {
    setCourseUpdate({
      ...courseUpdate,
      [name]: value
    })
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    https
      .put("/api/QuanLyKhoaHoc/CapNhatKhoaHoc", values)
      .then((res) => {
        console.log("Update thành công", res.data);
        message.success("Update thành công!");
        // setTimeout(function () {
        //   window.location.reload();
        // }, 500);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // todo: category options
  /* const options = [
    {
      value: "BackEnd",
      label: "Lập trình Backend"
    },
    {
      value: "Design",
      label: "Thiết kế Web"
    },
    {
      value: "DiDong",
      label: "Lập trình di động"
    },
    {
      value: "FrontEnd",
      label: "Lập trình Front end"
    },
    {
      value: "FullStack",
      label: "Lập trình Full Stack"
    },
    {
      value: "TuDuy",
      label: "Tư duy lập trình"
    }
  ]; */

  return (
    <div>
      <Form
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-5">
          <div>
            {/* Mã khóa học */}
            <Form.Item
              label="Mã khóa học"
              // name="maKhoaHoc"
              // rules={[
              //   {
              //     required: true,
              //     message: "Vui lòng nhập mã khóa học!",
              //   },
              // ]}
            >
              <Input
                name="maKhoaHoc"
                defaultValue={courseUpdate.maKhoaHoc}
                value={courseUpdate.maKhoaHoc}
              />
              <Input name="maKhoaHoc" value={courseUpdate.maKhoaHoc} disabled />
            </Form.Item>

            {/*Tên khóa học */}
            <Form.Item
              label="Tên khóa học"
              // name="tenKhoaHoc"
              // rules={[
              //   {
              //     required: true,
              //     message: "Vui lòng tên khóa học!",
              //   },
              // ]}
            >
              <Input
                name="tenKhoaHoc"
                value={courseUpdate.tenKhoaHoc}
                defaultValue={courseUpdate.tenKhoaHoc}
                onChange={(e) => {handleChange("tenKhoaHoc", e.target.label)}}
              />
            </Form.Item>

            {/* Danh mục khóa học */}
            <Form.Item
              label="Danh mục khóa học"
              // name="maDanhMucKhoaHoc"
              // rules={[
              //   {
              //     required: true,
              //     message: "Vui lòng chọn danh mục khóa học!",
              //   },
              // ]}
            >
              <Select
                name="maDanhMucKhoaHoc"
                defaultValue={courseUpdate.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                value={courseUpdate.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                options={options}
                value={courseUpdate.danhMucKhoaHoc.maDanhMucKhoahoc}
                onChange={(value) => {handleChange("maDanhMucKhoaHoc", value)}}
              >
                {/* <Select.Option value="BackEnd">Lập trình Backend</Select.Option>
                <Select.Option value="Design">Thiết kế Web</Select.Option>
                <Select.Option value="DiDong">Lập trình di động</Select.Option>
                <Select.Option value="FrontEnd">
                  Lập trình Front end
                </Select.Option>
                <Select.Option value="FullStack">
                  Lập trình Full Stack
                </Select.Option>
                <Select.Option value="TuDuy">Tư duy lập trình</Select.Option> */}
              </Select>
            </Form.Item>

            {/* Mã nhóm học*/}
            <Form.Item
              label="Mã nhóm học"
              // name="maNhom"
              // rules={[
              //   {
              //     required: true,
              //     message: "Vui lòng chọn nhóm học!",
              //   },
              // ]}
            >
              <Select
                name="maNhom"
                defaultValue={courseUpdate.maNhom}
                value={courseUpdate.maNhom}
              >
                <Select.Option value="GP01">GP01</Select.Option>
                <Select.Option value="GP02">GP02</Select.Option>
                <Select.Option value="GP03">GP03</Select.Option>
                <Select.Option value="GP04">GP04</Select.Option>
                <Select.Option value="GP05">GP05</Select.Option>
                <Select.Option value="GP06">GP06</Select.Option>
                <Select.Option value="GP07">GP07</Select.Option>
                <Select.Option value="GP08">GP08</Select.Option>
                <Select.Option value="GP09">GP09</Select.Option>
                <Select.Option value="GP10">GP10</Select.Option>
                <Select.Option value="GP11">GP11</Select.Option>
                <Select.Option value="GP12">GP12</Select.Option>
                <Select.Option value="GP13">GP13</Select.Option>
                <Select.Option value="GP14">GP14</Select.Option>
                <Select.Option value="GP15">GP15</Select.Option>
              </Select>
            </Form.Item>

            {/* Nguời tạo */}
            <Form.Item
              label="Người tạo"
              name="taiKhoanNguoiTao"
              rules={[
                {
                  required: true,
                  message: "Người tạo phải là GV!",
                },
              ]}
            >
              <Select
                name="taiKhoanNguoiTao"
                defaultValue={courseUpdate.nguoiTao?.maLoaiNguoiDung}
                value={courseUpdate.nguoiTao?.maLoaiNguoiDung}
              >
                <Select.Option value={dataJson.taiKhoan}>GV</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div>
            {/* Ngày tạo */}
            <Form.Item
              label="Ngày tạo"
              name="ngayTao"
              rules={[
                {
                  required: true,
                  message: "Ngày tạo không được để trống!",
                },
              ]}
            >
              <Input
                onChange={handleChange}
                name="ngayTao"
                value={courseUpdate.ngayTao}
                defaultValue={courseUpdate.ngayTao}
              />
            </Form.Item>

            {/* Đánh giá */}
            <Form.Item
              label="Đánh giá"
              name="danhGia"
              rules={[
                {
                  required: true,
                  message: "Đánh giá không được để trống!",
                },
              ]}
            >
              <InputNumber
                onChange={handleChange}
                name="danhGia"
                defaultValue={courseUpdate.danhGia}
                value={courseUpdate.danhGia}
              />
            </Form.Item>

            {/* Lượt xem */}
            <Form.Item
              style={{
                width: "100%",
              }}
              label="Lượt xem"
              name="luotXem"
              rules={[
                {
                  required: false,
                  message: "Lượt xem không được để trống!",
                },
              ]}
            >
              <InputNumber
                onChange={handleChange}
                name="luotXem"
                defaultValue={courseUpdate.luotXem}
                value={courseUpdate.luotXem}
              />
            </Form.Item>

            {/* Mô tả */}
            <Form.Item
              label="Mô tả khóa học"
              name="moTa"
              rules={[
                {
                  required: false,
                  message: "Mô tả không được để trống!",
                },
              ]}
            >
              <TextArea
                onChange={handleChange}
                name="moTa"
                rows={4}
                defaultValue={courseUpdate.moTa}
                value={courseUpdate.moTa}
              />
            </Form.Item>

            {/* Hình ảnh */}
            <Form.Item
              label="Hình ảnh khóa học"
              name="hinhAnh"
              getValueFromEvent={normFile}
            >
              <Upload
                onChange={handleChange}
                action="/api/upload/image"
                listType="picture"
                defaultValue={courseUpdate.hinhAnh}
                value={courseUpdate.hinhAnh}
              >
                <Button icon={<UploadOutlined />}>Tải lên</Button>
              </Upload>
            </Form.Item>
          </div>
        </div>

        <ButtonStyled
          className=" text-white w-full font-bold text-xl items-center"
          htmlType="submit"
        >
          Cập nhật
        </ButtonStyled>
      </Form>
    </div>
  );
}
