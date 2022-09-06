/** @format */

import React from "react";
import Navigation from "../../components/navbar/Navigation";
import Stories from "../../components/following/Stories";

import './index.css'
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className="Home" style={{height: '300vh'}}>
        <Stories/>
        home
      </div>
    </div>
  );
};

export default Home;
