import React, { useState, useEffect } from "react";
import "./TrendList.css";
import TrendItem from "./TrendItem";
import SettingsIcon from "@material-ui/icons/Settings";
import axios from "axios";

const LOADING = "LOADING";
const ERROR = "ERROR";
// {state !== ERROR &&
//   trends.map((trend) => {
//     <TrendItem trend={trend} key={trend.id} />;
//   })}

function TrendList() {
  const [trends, setTrends] = useState([]);
  const [state, setState] = useState("");

  useEffect(async () => {
    setState(LOADING);
    try {
      const { data } = await axios.get("/trends");
      console.log(data);
      setState("");
      setTrends(data);
    } catch (error) {
      setState(ERROR);
    }
  }, []);

  return (
    <>
      {state === ERROR && <h2>Error has occured</h2>}
      {state === LOADING && trends.length === 0 && (
        <h2 style={{ color: "white" }}>Loading ...</h2>
      )}
      <div className="trend__list">
        <div className="trend__header">
          <span>Trends for you</span>
          <SettingsIcon
            style={{ color: "#1EA1F2", height: "24px", width: "24px" }}
          />
        </div>
        {state !== ERROR &&
          trends.map((trend) => {
            return <TrendItem trend={trend} key={trend.id} />;
          })}
        <div className="trend__footer">
          <span>Show more</span>
        </div>
      </div>
    </>
  );
}

export default TrendList;
