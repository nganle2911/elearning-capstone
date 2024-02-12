import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../services/api'
import Course from '../../components/Course/Course'

export default function Catalog() {
    const {maDanhMuc} = useParams({})
    const [catalog, setCatalog] = useState([])
    
    useEffect(() => {
        https.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`)
        .then((res) => {
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
  return (
    <div className='homePage__courses container py-24'>
    <div className='courses__title text-center pb-10'>
    </div>
    <div className='courses__list grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {renderCoursesList()}
    </div>
</div>
  )
}
