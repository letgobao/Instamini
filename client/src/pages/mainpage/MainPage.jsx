/** @format */

import React from "react";
import Post from "../../components/post/Post";
import Stories from "../../components/story/Stories";
import LeftSide from '../../components/leftside/LeftSide'
import './MainPage.css'
const MainPage = () => {
  return (
    <div className='MainPage'>
      <div className="left-side">
        <LeftSide/>
      </div>
      <div className='right-side'>
        <Stories />
        <Post />
      </div>
    </div>
  );
};

export default MainPage;
