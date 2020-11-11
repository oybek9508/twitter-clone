import React from "react";
import "./TrendItem.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const DEFAULT = "SPORTS";
function TrendItem({ trend: { name } }) {
  return (
    <div className="trend__item">
      <span>{name || DEFAULT}</span>
      <MoreHorizIcon style={{ color: "white" }} />
    </div>
  );
}

export default TrendItem;
