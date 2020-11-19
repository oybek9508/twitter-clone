import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { BrowserRouter, Router, Switch } from "react-router-dom";
import FeedList from "./FeedList/FeedList";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { Avatar } from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import GifIcon from "@material-ui/icons/Gif";
import PollIcon from "@material-ui/icons/Poll";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [about, setAbout] = useState("");

  const handleChange = (e) => {
    setAbout(e.target.value);
  };
  const newFeed = {
    id: uuidv4(),
    index: 0,
    picture:
      "https://static.politico.com/c0/b2/a9fc15064ee1bfdc2a5175128beb/200409-obama-getty-773.jpg",
    numOfTweets: "675",
    numOfComments: "1.2k",
    numOfLikes: "23k",
    name: "Barack Obama",
    email: "valenzuelarodgers@comfirm.com",
    about: "Brand new feed is here",
    registered: "2014-11-27T07:02:34 -09:00",
  };
  const handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    axios
      .post("http://localhost:4000/feeds", newFeed)
      .then(({ data }) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="twitter__body">
      <div className="body__header">
        <span>Home</span>
        <StarBorderIcon style={{ color: "#1da1f2" }} />
      </div>
      <div className="body__onYourMind">
        <div className="onYourMind__left">
          <Avatar
            src="https://i1.sndcdn.com/avatars-000259793992-c76aco-t500x500.jpg"
            style={{ width: "53px", height: "53px" }}
          />
        </div>
        <div className="onYourMind__right">
          <form className="onYourMind__top" onSubmit={handleSubmit}>
            <input
              placeholder="What's happening?"
              className="onYourMind__input"
              value={about}
              onChange={handleChange}
            />
          </form>
          <div className="onYourMind__bottom">
            <div className="onYourMind__icons">
              <div className="icon__div">
                <label htmlFor="input-file">
                  <ImageIcon
                    className="mind__icons"
                    style={{ weight: "24px", height: "24px" }}
                  />
                </label>
                <input
                  type="file"
                  id="input-file"
                  style={{ display: "none" }}
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
      </div>
      <div className="body__feed">
        <BrowserRouter>
          <FeedList about={about} />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Home;
