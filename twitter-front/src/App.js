import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";
import SideBarRight from "./components/SideBarRight/SideBarRight";
import Home from "./routes/Home/Home";
import Explore from "./routes/Explore/Explore";
import Messages from "./routes/Messages/Messages";
import Notifications from "./routes/Notifications/Notifications";
import Profile from "./routes/Profile/Profile";
import Bookmarks from "./routes/Bookmarks/Bookmarks";
import Lists from "./routes/Lists/Lists";
import axios from "axios";

class App extends React.Component {
  state = {
    photo: [],
    name: [],
    userName: [],
    tweet: [],
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="sideBar__left">
            <SideBarLeft />
          </div>
          <div className="twitter__body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/messages" component={Messages} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/profile" component={Profile} />
              <Route path="/lists" component={Lists} />
              <Route path="/bookmarks" component={Bookmarks} />
            </Switch>
          </div>
          <div className="sideBar__right">
            <SideBarRight />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
