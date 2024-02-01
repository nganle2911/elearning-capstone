import { Button } from 'antd'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
    <div class="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 lg:px-5 space-x-12 ">
      <div className='footer_g1 px-5'>
      <img className="w-full" src="../../img/logo.png" alt="logo" />
      <ul>
        <li>
        <i class="fa fa-phone"></i>
          <span type="tell">1800-999-9999</span>
        </li>
        <li>
        <i class="fa fa-envelope-open-text"></i>
          <span>elearning@gmail.com</span>
        </li>
        <li>
        <i class="fa fa-map-marked-alt"></i>          <span>Hồ Chí Minh</span>
        </li>
      </ul>
      </div>
      <div className='footer_item  '>
        <ul>
          <p className='footer_title'>Khóa học</p>
          <li><i class="fa fa-angle-double-right"></i> Lập trình Backend</li>
          <li><i class="fa fa-angle-double-right"></i> Thiết kế Web</li>
          <li><i class="fa fa-angle-double-right"></i> Lập trình di động</li>
          <li><i class="fa fa-angle-double-right"></i> Lập trình Front end</li>
          <li><i class="fa fa-angle-double-right"></i> Lập trình Full Stack</li>
          <li><i class="fa fa-angle-double-right"></i> Tư duy lập trình</li>
        </ul>
      </div>
      <div className='footer_item  '>
        <ul >
          <p className='footer_title'>Liên Kết</p>
          <li><i class="fa fa-angle-double-right"></i> Trang chủ</li>
          <li><i class="fa fa-angle-double-right"></i> Khóa học phổ biến</li>
          <li><i class="fa fa-angle-double-right"></i> Blog</li>
        </ul>
      </div>
      <div className=' '>
        <p className='footer_title'>Đăng kí tư vấn</p>
        <form>
          <input type="text" placeholder='Họ và tên'/>
          <br />
          <input type="email" placeholder='Email'/>
          <br />
          <input type="tel" placeholder='Số điện thoại'/>
          <br />
          <Button>Đăng kí</Button>
        </form>
      </div>
    </div>
      <hr className='px-5'/>
    <div className='footer_bottom'>
      <h4>Copyright © 2024. <a href="#">All rights reserved.</a></h4>
    </div>
    </div>
  )
}
