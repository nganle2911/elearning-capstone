import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../services/api'
import Course from '../../components/Course/Course'
import { ButtonStyled } from '../../components/ButtonStyled/ButtonStyled'
import { Button } from 'antd'

export default function Catalog() {
    const {maDanhMuc} = useParams({})
    const [titleCatalog, setTitleCatalog] = useState()
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        https.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`)
        .then((res) => {
            console.log(res.data)
         setCatalog(res.data)
        })
        .catch((err) => {
         console.log(err);
         });
    },[maDanhMuc])

    const renderCoursesList = () => {
        return catalog.slice(0, 12).map((course, index) => {
            return (
                <div className='coursesList__item flex justify-center items-center' key={index}>
                    <Course course={course} />
                </div>
            )
        })
    }
  
    const renderTitleCatalog = () => {
        let renderTitle = '';

        return catalog.map((title, index) => {
            if (!renderTitle) {
                renderTitle = title.danhMucKhoaHoc.tenDanhMucKhoaHoc;
                return (
                    <div key={index}>
                        <h1>{renderTitle}</h1>
                    </div>
                );
            }
            return null;
        })
    }
  return (
    <div>
        <div className='homePage__courses container py-24'>
            <div className='catalogCourses'>
            <h1>KHÓA HỌC THEO DANH MỤC</h1>
            <p>HÃY CHỌN KHÓA HỌC MONG MUỐN!!!</p>
            </div>
        <button className='catalog_title'>
          {renderTitleCatalog()}
        </button>
        <div className='courses__list grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {renderCoursesList()}
        </div>
        </div>  
    </div>
    
  )
}
