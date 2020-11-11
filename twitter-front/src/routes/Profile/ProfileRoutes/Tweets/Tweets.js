import React from "react";
import "./Tweets.css";
import TweetFollowList from "./TweetFollowList ";

function Tweets() {
  return (
    <div className="profile__tweets">
      <div className="profile__tweets__header">
        <span>Who to follow</span>
      </div>
      <div className="profile__tweets__body">
        <TweetFollowList />
      </div>
      <div className="profile__tweets__footer">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Tweets;
