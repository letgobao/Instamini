import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
const Personal = ({ data }) => {
  const username = "du.tran917";
  const [isFollowing, setIsFollowing] = useState(data.isFollowing);
  return (
    <div className="personal">
      <div className="personal-header">
        <div className="personal-avatar">
          <Avatar
            src={data.avatarURL}
            alt="person"
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div className="personal-info">
          <div className="p-name">
            <Typography variant="h3">{data.username}</Typography>
            {username === data.username ? (
              <div className="p-edit">Chỉnh sửa trang cá nhân</div>
            ) : (
              <div className="p-connect">
                <div
                  onClick={() => {
                    setIsFollowing(!isFollowing);
                  }}
                >
                  {isFollowing ? (
                    <span>Bỏ theo dõi</span>
                  ) : (
                    <span>Theo dõi</span>
                  )}
                </div>
                <div>Nhắn tin</div>
              </div>
            )}
          </div>
          <div className="p-number">
            <div>{`${data.post} bài viết`}</div>
            <div>{`${data.follower} người theo dõi`}</div>
            <div>{`Đang theo dõi ${data.following} người dùng`}</div>
          </div>
          <div className="description">
            <div>{data.fullName}</div>
            <div>{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
