import React from "react";
import { TileList } from "../tileList/TileList";

export const Tile = (props) => {

  const data = props.contact;
  const values = Object.values(data);
  console.log(values, 'values');
  return (
    <div className="tile-container">
      {values.map((value, index) =>
        <p className="title" key={index}>{value}</p>
      )}
    </div>
  );
};
