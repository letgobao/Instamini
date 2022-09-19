/** @format */

import React from "react";
import Navigation from "../../components/navbar/Navigation";

import "./index.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Personal from "../personal/Personal";
import { ronaldo } from "../../data/personal";
import MainPage from "../mainpage/MainPage";
const Home = () => {
  return (
    <div>
      <Navigation />
      <div className='main-container'>
      <MainPage/>
        {/* <Routes>
          <Route
            path='ronaldo'
            element={<Personal data={ronaldo} />}
          />
        </Routes> */}
      </div>
    </div>
  );
};

export default Home;
