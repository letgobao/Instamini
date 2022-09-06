/** @format */

import "./App.css";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/auth/Register";
import { ronaldo } from "./data/personal";
import Personal from "./pages/personal/Personal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* <Route path="user/*" element={<Home />} /> */}

          <Route path="login" element={<Auth />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
