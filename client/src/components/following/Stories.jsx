/** @format */

import React, { useState } from "react";
import { persons } from "../../data/person";
import Avatar from "@mui/material/Avatar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Stories.css";
const Stories = () => {
  const [display, setDisplay] = useState([0, 6]);
  const handleClickNextBtn = () => {
    if (display[1] + 6 < persons.length)
      setDisplay([display[0] + 6, display[1] + 6]);
    else {
      let delta = persons.length - display[1];
      setDisplay([display[0] + delta, persons.length]);
    }
  };
  const handleClickPreBtn = () => {
    if (display[0] - 6 > 0) {
      setDisplay([display[0] - 6, display[1] - 6]);
    } else setDisplay([0, 6]);
  };
  return (
    <div className='Stories'>
      <div className='stories-container'>
        {persons
          .slice(display[0], display[1])
          .map((person, index) => {
            return (
              <div className='following-card' key={index}>
                <Avatar
                  alt={person.name}
                  src={person.img}
                  sx={{ width: 65, height: 65 }}
                />
                <div className='following-name'>
                  {person.name}
                </div>
              </div>
            );
          })}
        <div
          className={
            display[1] < persons.length
              ? "btn next-btn"
              : "btn-n-display"
          }
          onClick={handleClickNextBtn}>
          <NavigateNextIcon />
        </div>
        <div
          className={
            display[0] > 0 ? "btn pre-btn" : "btn-n-display"
          }
          onClick={handleClickPreBtn}>
          <NavigateBeforeIcon />
        </div>
      </div>
    </div>
  );
};

export default Stories;
