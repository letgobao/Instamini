/** @format */

import React from "react";
import {
  Avatar,
  ListItemAvatar,
  List,
  ListItem,
  Button,
  ListItemText,
} from "@mui/material";

import "./LeftSide.css";
const LeftSide = () => {
  const user_data = {
    name: "Hoang Ngoc Bao",
    user_name: "baobuoibu",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
  };
  const recommend_friends = [
    {
      user_name: "someone",
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2018/12/07/9/e/a/5/1544146983925_640.jpg",
    },
    {
      user_name: "du",
      avatar:
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/286923325_2283146425172611_7524265888410483566_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=cfDuD533y4oAX9xvHUJ&_nc_ht=scontent.fhan2-3.fna&oh=00_AT9waGvMy1WnTGtO0seCcHi29YLLO98PvDRkEBG0cvv4Rg&oe=632E35B6",
    },
    {
      user_name: "nghia",
      avatar:
        "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/279864030_2241118472702363_4004584743758932948_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Yhft4VdIrAcAX96Oy0e&_nc_ht=scontent.fhan2-5.fna&oh=00_AT8cWD9aFfseytOksvAEt_evtStzB5ESQ0PBm9mMPZ7DRQ&oe=632E5915",
    },
    {
      user_name: "Trong",
      avatar:
        "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-1/299385224_3232837416967648_1398243278159392613_n.jpg?stp=dst-jpg_s320x320&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=nwb23h_1smQAX92QC0y&tn=hF91UgwBYo1BVGwY&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8gFbqdRPuYOEyoCQMj30bQpPIJhTPjryFi9TOZwChIXQ&oe=632CAE68",
    },
    {
      user_name: "dung",
      avatar:
        "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/307459867_1278816162887523_2994375654452473314_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HwPXA3d38dwAX-jvyGW&_nc_ht=scontent.fhan2-4.fna&oh=00_AT-geYIZMwpMge3th0TX3sXRLWTanEH59S7EeyhO0CZ6Cw&oe=632DA165",
    },
  ];
  return (
    <div>
      <div className='user-card'>
        <div className='user-card-header'>
          <div className='uchc'>
            <div className='avatar-box'>
              <Avatar
                src={user_data.avatar}
                sx={{ width: 52, height: 52 }}
              />
            </div>
            <div className='user-content'>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}>
                {user_data.user_name}
              </div>
              <div className="gray-text">{user_data.name}</div>
            </div>
          </div>
          <Button>Logout</Button>
        </div>
      </div>
      <div className='recommend-friend'>
        <div className='gray-text'>Gợi ý cho bạn</div>
        <List>
          {recommend_friends.map((friend, index) => (
            <ListItem
              key={index}
              secondaryAction={<Button>Theo dõi</Button>}
              disablePadding>
              <ListItemAvatar>
                <Avatar
                  src={friend.avatar}
                  sx={{ width: 35, height: 35 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={friend.user_name}
                secondary='Đang theo dõi bạn'
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default LeftSide;
