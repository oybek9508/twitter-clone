import React, { useState } from "react";
import "./TrendItem.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const DEFAULT = "SPORTS";
function TrendItem({ trend: { name } }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div className="trend__item">
      <span>{name || DEFAULT}</span>
      <div className="moreIcon__trend__div">
        <MoreHorizIcon onClick={openMenu} style={{ color: "white" }} />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <SentimentVeryDissatisfiedIcon
            style={{
              width: "20px",
              height: "20px",
              marginRight: "20px",
              color: "#8899a6",
            }}
          />
          Not interested in this
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <SentimentVeryDissatisfiedIcon
            style={{
              width: "20px",
              height: "20px",
              marginRight: "20px",
              color: "#8899a6",
            }}
          />
          This trend is harmful or spammy
        </MenuItem>
      </Menu>
    </div>
  );
}

export default TrendItem;
