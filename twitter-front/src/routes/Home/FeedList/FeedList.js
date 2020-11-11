import React, { useState } from "react";
import "./FeedList.css";
import FeedItem from "./FeedItem";
import { useEffect } from "react";
import axios from "axios";

const LOADING = "LOADING";
const ERROR = "ERROR";

function FeedList() {
  const [feeds, setFeeds] = useState([]);
  const [state, setState] = useState("");

  useEffect(async () => {
    // setState(LOADING);
    try {
      const { data } = await axios.get("/feeds");
      setState("");
      setFeeds(data);
    } catch (error) {
      setState(ERROR);
    }
  }, []);
  return (
    <>
      {state === ERROR && <h2>Error has occured</h2>}
      {state === LOADING && feeds.length === 0 && (
        <h2 style={{ color: "white" }}>Loading ...</h2>
      )}
      <div className="feed__list">
        {state !== ERROR &&
          feeds.map((feed) => <FeedItem feed={feed} key={feed._id} />)}
      </div>
    </>
  );
}
export default FeedList;
