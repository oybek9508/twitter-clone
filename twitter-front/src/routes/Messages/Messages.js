import React from "react";
import "./Messages.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SearchIcon from "@material-ui/icons/Search";

function Messages() {
  return (
    <div className="messages">
      <div className="messages__top">
        <span>Messages</span>
        <MailOutlineIcon style={{ color: "#1EA1F2" }} />
      </div>
      <div className="messages__middle">
        <div>
          <SearchIcon
            style={{
              color: "#8899A6",
              width: "20px",
              height: "20px",
            }}
          />
          <input type="text" placeholder="Search for people and groups" />
        </div>
      </div>
      <div className="messages__bottom">
        <span>Send a message, get a message</span>
        <br />
        <span>
          Direct Messages are private conversations between you and other people
          on Twitter. Share Tweets, media, and more!
        </span>
        <br />
        <button>Start a conversation</button>
      </div>
    </div>
  );
}

export default Messages;
