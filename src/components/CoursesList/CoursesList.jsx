import React, { useEffect, useState } from 'react'
import { https } from '../../services/api';
import Course from '../Course/Course';

export default function CoursesList() {
    const [coursesList, setCoursesList] = useState([]);

    useEffect(() => {
        https.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01").then((res) => {
            console.log("res", res.data);
            setCoursesList(res.data);
        }).catch((err) => {
            console.log("err", err);
        });
    }, []);

    const renderCoursesList = () => {
        return coursesList.slice(0, 12).map((course, index) => {
            return (
                <div className='coursesList__item flex justify-center' key={index}>
                    <Course course={course} />
                </div>
            )
        })
    }

    return (
        <div className='homePage__courses container py-24'>
            <div className='courses__title text-center pb-10'>
                <p className='text-2xl sm:text-xl capitalize font-medium mb-3' style={{ color: "rgba(29, 123, 133, 0.8)" }}>Danh mục</p>
                <h1 className='text-5xl sm:text-4xl capitalize font-bold' style={{ color: "#1d7a85" }}>Khám phá khoá học</h1>
            </div>
            <div className='courses__list grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {renderCoursesList()}
            </div>
        </div>
    )
}