import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import "./Personal.css";
import GridOnIcon from "@mui/icons-material/GridOn";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Personal = ({ data }) => {
  const username = "du.tran917";
  const [isFollowing, setIsFollowing] = useState(data.isFollowing);
  const [selectedOption, setSelectedOption] = useState(1);
  const url = useLocation();
  useEffect(() => {
    const path = url.pathname.split("/")[2];
    if (path === "reels") {
      setSelectedOption(2);
    } else if (path === "tags") {
      setSelectedOption(3);
    } else {
      setSelectedOption(1);
    }
  });
  return (
    <div className="personal">
      <div className="personal-header">
        <div className="personal-avatar">
          <Avatar
            src={data.avatarURL}
            alt="person"
            sx={{
              width: "150px",
              height: "150px",
            }}
          />
        </div>
        <div className="personal-info">
          <div className="p-name">
            <Typography variant="h4">{data.username}</Typography>
            {username === data.username ? (
              <div className="p-edit">Chỉnh sửa trang cá nhân</div>
            ) : (
              <div className="p-connect">
                <div
                  onClick={() => {
                    setIsFollowing(!isFollowing);
                  }}
                >
                  <Button variant="outlined">Nhắn tin</Button>
                  {isFollowing ? (
                    <Button variant="outlined">Bỏ theo dõi</Button>
                  ) : (
                    <Button variant="contained">Theo dõi</Button>
                  )}
                </div>
              </div>
            )}
          </div>

          <ul className="p-number">
            <li>
              <span>{data.post}</span> bài viết
            </li>
            <li>
              <span>{data.follower}</span> người theo dõi
            </li>
            <li>
              Đang theo dõi <span>{data.following}</span> người dùng
            </li>
          </ul>

          <div className="description">
            <div className="des-fullname">{data.fullName}</div>
            <div className="des-content">{data.description}</div>
          </div>
        </div>
      </div>
      <div className="personal-post">
        <div className="p-post-option">
          <Link
            className={selectedOption === 1 ? "p-option-select" : ""}
            to={data.username}
            onClick={(e) => {
              setSelectedOption(1);
            }}
          >
            <div>
              <GridOnIcon
                sx={{
                  width: "15px",
                  height: "15px",
                  marginRight: "5px",
                }}
              />
              <span>Bài đăng</span>
            </div>
          </Link>
          <Link
            className={selectedOption === 2 ? "p-option-select" : ""}
            to="reels"
            onClick={() => {
              setSelectedOption(2);
            }}
          >
            <div>
              <OndemandVideoOutlinedIcon
                sx={{
                  width: "15px",
                  height: "15px",
                  marginRight: "5px",
                }}
              />
              <span>Reels</span>
            </div>
          </Link>
          <Link
            className={selectedOption === 3 ? "p-option-select" : ""}
            to="tags"
            onClick={() => {
              setSelectedOption(3);
            }}
          >
            <div>
              <AssignmentIndOutlinedIcon
                sx={{
                  width: "15px",
                  height: "15px",
                  marginRight: "5px",
                }}
              />
              <span>Được gắn thẻ</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Personal;
