import React, { useState, useEffect } from "react";
import "./FollowSuggestion.css";
import FollowItem from "./FollowItem";
import axios from "axios";

const ERROR = "ERROR";
const LOADING = "LOADING";

function FollowSuggestion() {
  const [follows, setFollow] = useState([]);
  const [state, setState] = useState("");
  useEffect(async () => {
    try {
      const { data } = await axios.get("/follow_suggestion");
      setState("");
      setFollow(data);
    } catch (error) {
      setState(ERROR);
    }
  }, []);
  return (
    <div className="follow__suggestion">
      <div className="follow__header">
        <span>Who to follow</span>
      </div>
      {state === ERROR && <h2>Error has occured</h2>}
      {state === LOADING && follows.length === 0 && (
        <h2 style={{ color: "white" }}>Loading ...</h2>
      )}
      <>
        {follows.map((follow) => {
          return <FollowItem key={follow._id} follow={follow} />;
        })}
      </>
      <div className="follow__footer">
        <span>See more</span>
      </div>
    </div>
  );
}

export default FollowSuggestion;
