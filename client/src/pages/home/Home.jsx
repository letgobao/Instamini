/** @format */

import React, { useEffect, useState } from "react";
import Navigation from "../../components/navbar/Navigation";
import Stories from "../../components/following/Stories";

import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Personal from "../personal/Personal";
import { ronaldo, dutran } from "../../data/personal";
const Home = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const url = useLocation();
  useEffect(() => {
    const path = url.pathname.split("/")[1];
    if (path === "ronaldo") {
      setSelectedUser(ronaldo);
    } else if (path === "du.tran917") {
      setSelectedUser(dutran);
    }
  }, [url]);
  return (
    <div style={{ paddingTop: "100px" }}>
      <Navigation setSelectedUser={setSelectedUser} />
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route
          path={`${url.pathname}/*`}
          element={<Personal data={selectedUser} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
