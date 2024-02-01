import React from 'react'
import CoursesList from '../../components/CoursesList/CoursesList'
import SliderHome from '../../components/SliderHome/SliderHome'

export default function HomePage() {
  return (
    <div className='homePage py-24'>
        <SliderHome />
        <CoursesList />
    </div>
  )
}
