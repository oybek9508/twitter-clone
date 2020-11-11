import React from "react";
import "./Media.css";

function Media() {
  return (
    <div className="media">
      <span>You haven’t Tweeted any photos or videos yet</span>
      <br />
      <span>
        When you send Tweets with photos or videos in them, it will show up
        here.
      </span>
      <br />
      <button>Tweet photo or video</button>
    </div>
  );
}

export default Media;
