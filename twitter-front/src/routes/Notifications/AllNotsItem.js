import React from "react";
import "./AllNotsItem.css";
import WarningIcon from "@material-ui/icons/Warning";

function AllNotsItem() {
  return (
    <div className="all__nots__item">
      <WarningIcon
        style={{
          width: "32px",
          height: "32px",
          color: "#E0245E",
          marginRight: "10px",
        }}
      />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
        perspiciatis eligendi, tempore eveniet sint animi delectus dignissimos
        omnis voluptatibus, officiis rem accusantium minus recusandae dolore
        ipsam amet magnam soluta quasi!
      </span>
    </div>
  );
}

export default AllNotsItem;
