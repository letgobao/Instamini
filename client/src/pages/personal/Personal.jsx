import React from "react";
import Avatar from "@mui/material/Avatar";
const Personal = () => {
  return (
    <div className="personal">
      <div className="personal-header">
        <div className="personal-avatar">
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
            alt="person"
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
