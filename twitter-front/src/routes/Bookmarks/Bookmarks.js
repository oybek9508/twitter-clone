import React from "react";
import "./Bookmarks.css";

function Bookmarks() {
  return (
    <div className="bookmarks">
      <div className="bookmarks__top">
        <span>Bookmarks</span>
        <br />
        <span>@Oybek9508</span>
      </div>
      <div className="bookmarks__bottom">
        <span>You haven’t added any Tweets to your Bookmarks yet</span>
        <span>When you do, they’ll show up here.</span>
      </div>
    </div>
  );
}

export default Bookmarks;
