import React from "react";
import "./Explore.css";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import NewsContent from "./NewsContent";

function Explore() {
  return (
    <div className="explore">
      <div className="explore__header">
        <div>
          <SearchIcon
            style={{ color: "#8899a6", marginRight: "10px", marginLeft: "5px" }}
          />
          <input type="text" placeholder="Search Twitter" />
        </div>
        <SettingsIcon style={{ color: "rgb(30, 161, 242)" }} />
      </div>
      <div className="explore__top__news">
        <div>
          <span>US elections · LIVE</span>
          <br />
          <span>Pennsylvania: Get local updates about the elections</span>
        </div>
      </div>
      <div className="explore__content">
        <div>
          <span>What's happening</span>
        </div>
        <NewsContent />
        <NewsContent />
        <NewsContent />
      </div>
    </div>
  );
}

export default Explore;
