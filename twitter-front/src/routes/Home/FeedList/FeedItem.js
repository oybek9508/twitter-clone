import React from "react";
import "./FeedItem.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";

const DEFAULT =
  "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg";

function FeedItem({ feed }) {
  return (
    <div className="feed__item">
      <div className="feed__profile__image">
        <Avatar
          src={feed.picture || DEFAULT}
          style={{ width: "53px", height: "53px" }}
        />
      </div>
      <div className="feed__right">
        <div className="feed__right__top">
          <div>
            <span className="feed__name">{feed.name}</span>
            <span className="feed__username">{feed.email}</span>
            <p>Nov 4</p>
          </div>
          <div>
            <MoreHorizIcon
              style={{ width: "20px", height: "20px", color: "#8899a6" }}
            />
          </div>
        </div>
        <div className="feed__right__middle">
          <span className="feed__text">{feed.about}</span>
        </div>
        <div className="feed__right__bottom">
          <div>
            <ChatBubbleOutlineIcon style={{ width: "20px", height: "20px" }} />
            <span>{feed.numOfTweets}</span>
          </div>
          <div>
            <AutorenewIcon style={{ width: "20px", height: "20px" }} />
            <span>{feed.numOfComments}</span>
          </div>
          <div>
            <FavoriteBorderIcon style={{ width: "20px", height: "20px" }} />
            <span>{feed.numOfLikes}</span>
          </div>
          <div>
            <UnfoldMoreIcon style={{ width: "20px", height: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
