import { Button } from 'antd'
import React from 'react'

export default function Footer() {
  return (
    <div class="footer ">
      <div className='footer_g1'>
      <img className="w-52" src="../../img/logo.png" alt="logo" />
      <ul>
        <li>
        <i class="fa fa-phone"></i>
          <span>1800-999-9999</span>
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
      <div className='footer_item'>
        <ul>
          <p className='footer_title'>Khóa học</p>
          <li>Lập trình Backend</li>
          <li>Thiết kế Web</li>
          <li>Lập trình di động</li>
          <li>Lập trình Front end</li>
          <li>Lập trình Full Stack</li>
          <li>Tư duy lập trình</li>
        </ul>
      </div>
      <div className='footer_item'>
        <ul >
          <p className='footer_title'>Liên Kết</p>
          <li>Trang chủ</li>
          <li>Khóa học phổ biến</li>
          <li>Blog</li>
        </ul>
      </div>
      <div >
        <p className='footer_title'>Đăng kí tư vấn</p>
        <form>
          <input type="text" placeholder='Họ và tên'/>
          <br />
          <input type="text" placeholder='Email'/>
          <br />
          <input type="text" placeholder='Số điện thoại'/>
          <br />
          <Button>Đăng kí</Button>
        </form>
      </div>
    </div>
  )
}
