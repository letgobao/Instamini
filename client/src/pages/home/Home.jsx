/** @format */

import React from "react";
import Navigation from "../../components/navbar/Navigation";
import Stories from "../../components/following/Stories";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personal from "../personal/Personal";
import { ronaldo } from "../../data/personal";
const Home = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="ronaldo" element={<Personal data={ronaldo} />} />
      </Routes>
    </div>
  );
};

export default Home;
