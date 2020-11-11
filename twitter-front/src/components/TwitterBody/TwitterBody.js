import React from "react";
import "./TwitterBody.css";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import FeedList from "./FeedList/FeedList";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ScheduleIcon from "@material-ui/icons/Schedule";

function TwitterBody() {
  return (
    <div className="twitter__body">
      <div className="body__header">
        <span>Home</span>
        <StarBorderIcon style={{ color: "#1da1f2" }} />
      </div>
      <form className="body__onYourMind">
        <div className="onYourMind__left">
          <Avatar
            src="https://i1.sndcdn.com/avatars-000259793992-c76aco-t500x500.jpg"
            style={{ width: "53px", height: "53px" }}
          />
        </div>
        <div className="onYourMind__right">
          <div className="onYourMind__top">
            <input
              placeholder="What's happening?"
              className="onYourMind__input"
            />
          </div>
          <div className="onYourMind__bottom">
            <div className="onYourMind__icons">
              <div className="icon__div">
                <ImageIcon
                  className="mind__icons"
                  style={{ weight: "24px", height: "24px" }}
                />
              </div>
              <div className="icon__div">
                <GifIcon
                  className="mind__icons"
                  style={{ weight: "24px", height: "24px" }}
                />
              </div>
              <div className="icon__div">
                <PollIcon
                  className="mind__icons"
                  style={{ weight: "24px", height: "24px" }}
                />
              </div>
              <div className="icon__div">
                <InsertEmoticonIcon
                  className="mind__icons"
                  style={{ weight: "24px", height: "24px" }}
                />
              </div>
              <div className="icon__div">
                <ScheduleIcon
                  className="mind__icons"
                  style={{ weight: "24px", height: "24px" }}
                />
              </div>
            </div>
            <div className="onYourMind__tweet">Tweet</div>
          </div>
        </div>
      </form>
      <div className="body__feed">
        <BrowserRouter>
          <FeedList />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default TwitterBody;
