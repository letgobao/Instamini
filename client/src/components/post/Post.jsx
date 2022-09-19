/** @format */

import React, {useState} from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Avatar,
  IconButton,
  InputBase,
  Button,
  Divider
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Scrollbar,
  Pagination,
  Navigation,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
SwiperCore.use([Navigation, Scrollbar, Pagination]);
const Post = () => {
    const [myComment, setMyComment] = useState('')
  const post_data = {
    user_name: "lien_minh",
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png",
    post_img: [
      "https://anhdephd.vn/wp-content/uploads/2022/05/hinh-anh-lol-hinh-anh-lmht-hinh-nen-lol.jpg",
      "https://haycafe.vn/wp-content/uploads/2021/11/Hinh-anh-nen-LOL-dep-LMHT-1.jpg",
      "https://thuthuatnhanh.com/anh-lol-hinh-nen-lien-minh-huyen-thoai-lmht-dep/hinh-nen-vayne-dep-tuyet-trong-game-lol/",
    ],
    content: "chuan bi co nhieu skin moi nhe cac ban",
    like: 1000,
    comments: [
      { user: "bao", comment: "dep qua ad" },
      { user: "du", comment: "chuan bi ban than thoi" },
      { user: "nghia", comment: "gam vao cktg roi" },
      { user: "user34", comment: "dep qua ad" },
    ],
  };
  const handleChangeComment = (e) => {
    setMyComment(e.value)
  }
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src={post_data.avatar}
            sx={{ width: 41, height: 41 }}
          />
        }
        title={post_data.user_name}
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
      />
      <Swiper
        grabCursor
        pagination={{ clickable: true }}
        navigation
        loop>
        {post_data.post_img.map((img, index) => (
          <SwiperSlide key={index}>
            <CardMedia
              image={img}
              style={{ height: "0", paddingTop: "100%" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <MapsUgcOutlinedIcon />
        </IconButton>
        <IconButton>
          <SendTwoToneIcon />
        </IconButton>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <div className='post-content'>
          <div className='liked'>
            Co {post_data.like} luot thich
          </div>
          <div className='post-desc'>
            <span className='bold-content'>
              {post_data.user_name}
            </span>
            {post_data.content}
          </div>
        </div>
        <Divider style={{margin: '5px 0'}}/>
        <div className='post-comments'>
          {post_data.comments.map((comment, index) => (
            <div className='post-comment'>
              <span className='bold-content'>
                {comment.user}
              </span>
              {comment.comment}
            </div>
          ))}
        </div>
        <Divider style={{margin: '5px 0'}}/>
        <div className='comment'>
          <InputBase 
            size='medium'
            sx={{ ml: 1, flex: 1 }}
            placeholder='Thêm bình luận'
            value={myComment}
            onChange={handleChangeComment}
            style={{width: 'calc(100% - 100px)'}}
          />
          <Button variant="text" disabled={myComment === '' ? true : false}>Đăng</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
