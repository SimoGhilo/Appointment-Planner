import React from "react";
import { Tile } from "../tile/Tile"



export const TileList = (props) => {

  const tileList = props.appointments;

  return (
    <div className="tile-list">
      {tileList.map((tile, index) =>
        <Tile contact={tile} key={index} />
      )
      }</div>)

};
