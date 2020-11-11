import React from "react";
import "./SideBarRight.css";
import TrendList from "./Trends/TrendList";
import FollowSuggestion from "./Follow/FollowSuggestion";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import CopyrightIcon from "@material-ui/icons/Copyright";

function SideBarRight() {
  return (
    <div className="sidebar__Right">
      <div className="search">
        <SearchIcon
          style={{ color: "#8899A6", width: "20px", height: "20px" }}
        />
        <input
          type="text"
          placeholder="Search Twitter"
          className="searchInput"
        />
      </div>
      <div className="trends__List">
        <TrendList />
        <FollowSuggestion />
      </div>
      <div className="sidebar__right__footer">
        <div className="right__footer__top">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
        <div className="right__footer__bottom">
          <span>Ads info</span>
          <div className="right__moreIcon">
            <span>More</span>
            <MoreHorizIcon
              style={{ color: "#8899a6", height: "14px", width: "20px" }}
            />
          </div>
          <div className="right__copyRight">
            <CopyrightIcon
              style={{ color: "#8899a6", width: "14px", height: "14px" }}
            />
            <span>2020</span>
          </div>
          <span>Twitter, Inc.</span>
        </div>
      </div>
    </div>
  );
}

export default SideBarRight;
