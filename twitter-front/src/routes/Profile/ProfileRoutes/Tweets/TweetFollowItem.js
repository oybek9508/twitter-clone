import React from "react";
import "./TweetFollowItem.css";
import { Avatar } from "@material-ui/core";
function TweetFollowItem() {
  return (
    <div className="tweet__follow__item">
      <div>
        <Avatar
          src="https://pbs.twimg.com/profile_images/879361767914262528/HdRauDM-_400x400.jpg"
          style={{ width: "53px", height: "53px" }}
        />
        <div className="tweet__follow__item__name">
          <span>The Economist</span>
          <br />
          <span>@TheEconomist</span>
        </div>
      </div>
      <div className="tweet__follow__item__btn">
        <span>Follow</span>
      </div>
    </div>
  );
}

export default TweetFollowItem;
