import React from "react";
import "./SideBarLeft.css";
import { Link } from "react-router-dom";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function SideBarLeft() {
  return (
    <div className="sidebar__left">
      <div className="sidebarLeft">
        <div className="side__icons twitter__icon">
          <TwitterIcon
            style={{ color: "white", height: "35px", width: "35px" }}
          />
        </div>
        <div className="side__icons">
          <HomeIcon style={{ color: "#1EA1F2" }} />
          <span className="words default__word">
            <Link
              to="/"
              style={{ color: "rgb(30, 161, 242)", textDecoration: "none" }}
            >
              Home
            </Link>
          </span>
        </div>
        <div className="side__icons">
          <ExploreIcon style={{ color: "white" }} className="side__icon" />
          <Link
            to="/explore"
            style={{ color: "white", textDecoration: "none" }}
            className="words"
          >
            Explore
          </Link>
        </div>
        <div className="side__icons">
          <NotificationsNoneIcon
            style={{ color: "white" }}
            className="side__icon"
          />
          <span className="words">
            <Link
              to="/notifications"
              style={{ color: "white", textDecoration: "none" }}
            >
              Notifications
            </Link>
          </span>
        </div>
        <div className="side__icons">
          <MailOutlineIcon style={{ color: "white" }} className="side__icon" />
          <span className="words">
            <Link
              to="/messages"
              style={{ color: "white", textDecoration: "none" }}
            >
              Messages
            </Link>
          </span>
        </div>
        <div className="side__icons">
          <BookmarkBorderIcon
            style={{ color: "white" }}
            className="side__icon"
          />
          <span className="words">
            <Link
              to="/bookmarks"
              style={{ color: "white", textDecoration: "none" }}
            >
              Bookmarks
            </Link>
          </span>
        </div>
        <div className="side__icons">
          <ListAltIcon style={{ color: "white" }} className="side__icon" />
          <span className="words">
            <Link
              to="/lists"
              style={{ color: "white", textDecoration: "none" }}
            >
              Lists
            </Link>
          </span>
        </div>

        <div className="side__icons">
          <PersonOutlineIcon
            style={{ color: "white" }}
            className="side__icon"
          />
          <span className="words">
            <Link
              to="/profile"
              style={{ color: "white", textDecoration: "none" }}
            >
              Profile
            </Link>
          </span>
        </div>
        <div className="side__icons">
          <MoreHorizIcon style={{ color: "white" }} className="side__icon" />
          <span className="words">More</span>
        </div>
      </div>
      <div className="tweet__btn">
        <span>Tweet</span>
      </div>
      <div className="profile__account">
        <Avatar
          src="https://i1.sndcdn.com/avatars-000259793992-c76aco-t500x500.jpg"
          style={{ color: "white", height: "42px", width: "42px" }}
        />
        <div className="userName">
          <span className="profile__name">Oybek</span>
          <span className="profile__username">@oybek9508</span>
        </div>
        <ExpandMoreIcon style={{ color: "white" }} />
      </div>
    </div>
  );
}

export default SideBarLeft;
