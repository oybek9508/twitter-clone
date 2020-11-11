import React from "react";
import "./Replies.css";
import RepliesFollowList from "./RepliesFollowList";

function Replies() {
  return (
    <div className="profile__replies">
      <div className="profile__replies__header">
        <span>Who to follow</span>
      </div>
      <div className="profile__replies__body">
        <RepliesFollowList />
      </div>
      <div className="profile__replies__footer">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Replies;
