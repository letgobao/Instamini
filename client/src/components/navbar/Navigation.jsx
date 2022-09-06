/** @format */

import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Navigation.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  const [option, setOption] = useState(1);
  return (
    <nav className="navigation">
      <div className="nav-box">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo">Instamini</div>
          </div>
          <div className="nav-search">
            <SearchOutlinedIcon />
            <input type="text" placeholder="Tìm kiếm" />
          </div>
          <div className="nav-options">
            <div
              className={option === 1 ? "option selected" : "option"}
              onClick={() => {
                setOption(1);
              }}
            >
              <HomeOutlinedIcon />
            </div>
            <div
              className={option === 2 ? "option selected" : "option"}
              onClick={() => {
                setOption(2);
              }}
            >
              <ChatBubbleOutlineOutlinedIcon />
            </div>
            <div
              className={option === 3 ? "option selected" : "option"}
              onClick={() => {
                setOption(3);
              }}
            >
              <AddCircleOutlineOutlinedIcon />
            </div>
            <div
              className={option === 4 ? "option selected" : "option"}
              onClick={() => {
                setOption(4);
              }}
            >
              <NotificationsNoneIcon />
            </div>
            <Link
              to="/ronaldo"
              className={option === 5 ? "option selected" : "option"}
              onClick={() => {
                setOption(5);
              }}
            >
              <AccountCircleOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
