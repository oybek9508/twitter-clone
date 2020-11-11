import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./Notifications.css";
import SettingsIcon from "@material-ui/icons/Settings";
import AllNots from "./AllNots";
import Mentions from "./Mentions";

function Notifictions() {
  return (
    <div className="notifications">
      <div className="notifications__header">
        <span>Notifications</span>
        <SettingsIcon style={{ color: "rgb(30, 161, 242)" }} />
      </div>
      <div className="notifications__nav">
        <div className="notifications__nav__active">
          <Link to="/notifications/">All</Link>
        </div>
        <div>
          <Link to="/notifications/mentions">Mentions</Link>
        </div>
      </div>
      <div className="notifications__content">
        <Switch>
          <Route exact path="/notifications/" component={AllNots} />
          <Route path="/notifications/mentions" component={Mentions} />
        </Switch>
      </div>
    </div>
  );
}

export default Notifictions;
