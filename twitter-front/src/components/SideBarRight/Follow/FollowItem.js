import React from "react";
import "./FollowItem.css";
import { Avatar } from "@material-ui/core";
function FollowItem({ follow }) {
  return (
    <div className="follow_item">
      <div className="follow__left">
        <Avatar
          style={{ width: "53px", height: "53px" }}
          src={follow.picture}
        />
        <div className="followItem__account">
          <span className="followItem__name">{follow.name}</span>
          <br />
          <span className="followItem__userName">{follow.email}</span>
        </div>
      </div>

      <div className="follow_button">
        <span>Follow</span>
      </div>
    </div>
  );
}

export default FollowItem;
