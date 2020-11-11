import React from "react";
import "./NewsContentItem.css";

function NewsContentItem() {
  return (
    <div className="news__content__item">
      <div className="news__content__item__left">
        <span>US elections · LIVE</span>
        <br />
        <span>Pennsylvania: Get local updates about the elections</span>
      </div>
      <div className="news__content__item__right"></div>
    </div>
  );
}

export default NewsContentItem;
