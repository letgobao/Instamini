/** @format */

import React, { useEffect, useState } from "react";
import Navigation from "../../components/navbar/Navigation";

import "./index.css";
import { Routes, Route } from "react-router-dom";
import Personal from "../personal/Personal";
import { ronaldo, dutran } from "../../data/personal";
import MainPage from "../mainpage/MainPage";
const Home = ({ selectedUser, setSelectedUser }) => {
  return (
    <div>
      <Navigation setSelectedUser={setSelectedUser} />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path={selectedUser ? `/${selectedUser.username}/*` : "/*"}
            element={
              selectedUser ? <Personal data={selectedUser} /> : <>Ko ton tai</>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
