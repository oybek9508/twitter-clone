import React, { useState } from "react";
import "./FeedItem.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import ListAltIcon from "@material-ui/icons/ListAlt";
import VoiceOverOffIcon from "@material-ui/icons/VoiceOverOff";
import BlockIcon from "@material-ui/icons/Block";
import CodeIcon from "@material-ui/icons/Code";
import ReportIcon from "@material-ui/icons/Report";

const DEFAULT_IMAGE =
  "https://pbs.twimg.com/profile_images/1084019773204131840/LU_05Hqi_400x400.jpg";
const DEFAULT_NAME = "Oybek Toshmatov";
const DEFAULT_EMAIL = "@Oybek9508";

function FeedItem({ feed, about }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div className="feed__item">
      <div className="feed__profile__image">
        <Avatar
          src={feed.picture || DEFAULT_IMAGE}
          style={{ width: "53px", height: "53px" }}
        />
      </div>
      <div className="feed__right">
        <div className="feed__right__top">
          <div>
            <span className="feed__name">{feed.name || DEFAULT_NAME}</span>
            <span className="feed__username">
              {feed.email || DEFAULT_EMAIL}
            </span>
            <p>Nov 4</p>
          </div>
          <div>
            <div className="moreIcon__div">
              <MoreHorizIcon
                onClick={openMenu}
                style={{ width: "20px", height: "20px", color: "#8899a6" }}
              />
            </div>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <SentimentVeryDissatisfiedIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Not interested in this tweet
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <PersonAddDisabledIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Unfollow @Youtube
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListAltIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Add/remove from Lists
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <VoiceOverOffIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Mute @Youtube
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <CodeIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Embed @Youtube
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <BlockIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Block Tweet
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ReportIcon
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "20px",
                    color: "#8899a6",
                  }}
                />
                Report Tweet
              </MenuItem>
            </Menu>
          </div>
        </div>
        <div className="feed__right__middle">
          <span className="feed__text">{feed.about || about}</span>
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
