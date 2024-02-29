import { Select, Table } from 'antd'
import React from 'react'
import { ButtonStyled } from '../../../components/ButtonStyled/ButtonStyled'

export default function UserEnrollment() {
    
    

    // columns for tables
    const columns = [
        {
            title: 'STT',
            dataIndex: 'order',
            key: 'order',
            render: (text, record, index) => index + 1
        },
        {
            title: 'Tên khoá học',
            dataIndex: 'tenKhoaHoc',
            key: 'tenKhoaHoc'
        },
        {
            title: 'Chờ xác nhận',
            dataIndex: 'choXacNhan',
            key: 'choXacNhan'
        }
    ]

    return (
        <div className='userEnrollment mt-3'>
            {/* choose course */}
            <div className='chooseCourse'>
                <h3 className='text-xl capitalize font-medium mb-3'>chọn khoá học</h3>
                <div className='chooseCourse flex justify-between items-center'>
                    <Select placeholder='Chọn khoá học' className='h-10 w-full'/>
                    <ButtonStyled className='ml-3 uppercase w-28'>ghi danh</ButtonStyled>
                </div>
            </div>
            <hr className='my-8'/>

            {/* Course awaiting validation */}
            <div className='awaitingCourse'>
                <h3 className='text-xl font-medium capitalize mb-3'>khoá học chờ xác thực</h3>
                <Table className='tblAwaitCourse' columns={columns} pagination={{ pageSize: 5 }} />
            </div>
            <hr className='my-8' />

            {/* Enrolled course */}
            <div className='enrolledCourse'>
                <h3 className='text-xl font-medium capitalize mb-3'>khoá học đã ghi danh</h3>
                <Table className='tblEnrolledCourse' columns={columns} pagination={{ pageSize: 5 }} />
            </div>
        </div>
    )
}
