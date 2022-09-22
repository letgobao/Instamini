/** @format */

import "./App.css";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import { dutran, ronaldo } from "./data/personal";
import Personal from "./pages/personal/Personal";
import { useEffect, useState } from "react";
function App() {
  const [selectedUser, setSelectedUser] = useState();

  let path = window.location;
  useEffect(() => {
    if (path.pathname == "/ronaldo") {
      setSelectedUser(ronaldo);
    } else if (path.pathname == "/du.tran917") {
      setSelectedUser(dutran);
    } else {
      setSelectedUser(null);
    }
  }, [path]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <Home
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />

          <Route path="login" element={<Auth />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
