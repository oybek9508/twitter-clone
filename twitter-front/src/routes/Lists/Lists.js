import React from "react";
import "./Lists.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ListAltIcon from "@material-ui/icons/ListAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Lists() {
  return (
    <div className="lists">
      <div className="lists__header">
        <div className="lists__header__left">
          <div>
            <ArrowBackIcon
              style={{ width: "24px", height: "24px", color: "#1EA1F2" }}
            />
          </div>
          <div>
            <span>Lists</span>
            <br />
            <span>@Oybek9508</span>
          </div>
        </div>
        <div className="lists__header__right">
          <div>
            <ListAltIcon
              style={{
                width: "24px",
                height: "24px",
                color: "#1EA1F2",
                marginRight: "20px",
              }}
            />
          </div>
          <div>
            <MoreHorizIcon
              style={{ width: "24px", height: "24px", color: "#1EA1F2" }}
            />
          </div>
        </div>
      </div>
      <div className="lists__pinned">
        <span>Pinned</span>
      </div>
      <div className="lists__notify">
        <span>
          Nothing to see here yet — pin up to five of your favorite Lists to
          access them quickly.
        </span>
      </div>
      <div className="lists__lists">
        <span>Your Lists</span>
      </div>
      <div className="lists__bottom">
        <span>You haven’t created any Lists yet</span>
        <br />
        <span>When you do, it’ll show up here.</span>
        <br />
        <button>Create a list</button>
      </div>
    </div>
  );
}

export default Lists;
