import React from "react";
import "./RepliesFollowItem.css";
import { Avatar } from "@material-ui/core";

function RepliesFollowItem() {
  return (
    <div className="replies__follow__item">
      <div>
        <Avatar
          src="https://pbs.twimg.com/profile_images/1053007338137890817/TcI7t8eP_400x400.jpg"
          style={{ width: "53px", height: "53px" }}
        />
        <div className="replies__follow__item__name">
          <span>Muhammad Ali</span>
          <br />
          <span>@MuhammadAli</span>
        </div>
      </div>
      <div className="replies__follow__item__btn">
        <span>Follow</span>
      </div>
    </div>
  );
}

export default RepliesFollowItem;
