import React from "react";
import { TileList } from "../tileList/TileList";

export const Tile = (props) => {

  const data = props.value;
  const values = Object.values(data);

  return (
    <div className="tile-container">
      {values.map((value, index) => {
        <p className="title" key={index}>{value}</p>
      })}
    </div>
  );
};
