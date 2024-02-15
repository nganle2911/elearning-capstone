import { List, Progress, Rate } from 'antd'
import React from 'react'
import { RANDOM_NUM } from '../../services/constant';

export default function EnrolledCourse({ enrolledCourses }) {
    console.log("courses: ", enrolledCourses);


    const arrCourses = enrolledCourses.map((course, index) => {
        return ({
            key: index,
            title: `${course.tenKhoaHoc}`,
            description: `${course.moTa}`,
            img: `${course.hinhAnh}`,
            rating: `${course.danhGia}`,
        })
    });

    return (
        <List
            className='courseContent__enrolled mt-5'
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={arrCourses}
            renderItem={(item) => (
                <List.Item
                    key={item.title}
                    actions={[
                        <Progress percent={RANDOM_NUM + item.rating * 10} format={(percent) => `${percent}% complete`} />,
                        <Rate allowHalf defaultValue={item.rating / 2} />
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src={item.img}
                        />
                    }
                >
                    <List.Item.Meta
                        title={<a href='#'>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}
