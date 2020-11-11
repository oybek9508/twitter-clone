import React from "react";
import "./Profile.css";
import { Route, Switch, Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Avatar } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Tweets from "./ProfileRoutes/Tweets/Tweets";
import Likes from "./ProfileRoutes/Likes/Likes";
import Replies from "./ProfileRoutes/Replies/Replies";
import Media from "./ProfileRoutes/Media/Media";

function Profile() {
  return (
    <div className="profile">
      <div className="profileHeader">
        <div className="profileHeader__iconDiv">
          <ArrowBackIcon
            style={{ color: "1EA1F2", width: "24px", height: "24px" }}
          />
        </div>
        <div>
          <span className="profileUsername">Oybek</span>
          <br />
          <span className="profileTweetNum">0 Tweets</span>
        </div>
      </div>
      <div className="profileBody">
        <div className="profileBodyTop"></div>
        <div className="profileBodyBottom">
          <div className="profileBottom__left">
            <Avatar
              src="https://pbs.twimg.com/profile_images/1084019773204131840/LU_05Hqi_400x400.jpg"
              style={{
                width: "133px",
                height: "133px",
                marginTop: "-40%",
                border: "4px solid rgb(0, 0, 0)",
              }}
            />
            <div className="profileBottom__left__name">
              <span>Oybek</span>
              <br />
              <span>@Oybek9508</span>
            </div>
            <div className="profileBottom__left__date">
              <DateRangeIcon style={{ width: "20px", height: "20px" }} />
              <span>Joined</span>
              <span>January 2020</span>
            </div>
            <div className="profileBottom__left__follow">
              <span>0 </span>
              <span>Following</span>
              <span>199k </span>
              <span>Follower</span>
            </div>
          </div>
          <div className="profileBottom__right">
            <span>Edit profile</span>
          </div>
        </div>
      </div>
      <div className="profileActivities">
        <div className="activityLinks">
          <div>
            <Link to="/profile">Tweets</Link>
          </div>
          <div>
            <Link to="/profile/replies">Tweets & replies</Link>
          </div>
          <div>
            <Link to="/profile/media">Media</Link>
          </div>
          <div>
            {" "}
            <Link to="/profile/likes">Likes</Link>
          </div>
        </div>
      </div>
      <div className="activityContent">
        <Switch>
          <Route exact path="/profile/" component={Tweets} />
          <Route path="/profile/replies" component={Replies} />
          <Route path="/profile/media" component={Media} />
          <Route path="/profile/likes" component={Likes} />
        </Switch>
      </div>
    </div>
  );
}

export default Profile;
