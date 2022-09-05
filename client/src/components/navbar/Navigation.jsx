/** @format */

import React from "react";
import {
  SearchIcon,
  HomeIcon,
  HomeFillIcon,
  ChatFillIcon,
  ChatIcon,
  PlusFillIcon,
  PlusIcon,
  NotificationFillIcon,
  NotificationIcon,
  AvatarIcon,
} from "../../imgs/icons/index.js";

import './Navigation.css'
const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='nav-box'>
        <div className="nav-container">
          <div className='nav-logo'>
            <div className='logo'>Instamini</div>
          </div>
          <div className='nav-search'>
            <img src={SearchIcon} alt='Tìm kiếm' />
            <input type='text' placeholder='Tìm kiếm' />
          </div>
          <div className='nav-options'>
            <div className="option">
              <img src={true ? HomeIcon : HomeFillIcon} alt="Home" />
            </div>
            <div className="option">
              <img src={true ? ChatIcon : ChatFillIcon} alt="Nhắn tin" />
            </div>
            <div className="option">
              <img src={true ? PlusIcon : PlusFillIcon} alt="Đăng bài" />
            </div>
            <div className="option">
              <img src={true ? NotificationIcon : NotificationFillIcon} alt="Thông báo" />
            </div>
            <div className="option">
              <img src={AvatarIcon} alt="Cá nhân" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
