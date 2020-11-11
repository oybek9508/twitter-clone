import React from "react";
import "./Likes.css";

function Likes() {
  return (
    <div className="likes">
      <span>You don’t have any likes yet</span>
      <br />
      <span>
        Tap the heart on any Tweet to show it some love. When you do, it’ll show
        up here.
      </span>
      <br />
    </div>
  );
}

export default Likes;
