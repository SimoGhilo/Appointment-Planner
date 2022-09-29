import React from "react";
import { Tile } from "../tile/Tile"
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";
import { AppointmentsPage } from "../../containers/appointmentsPage/AppointmentsPage";


export const TileList = (props) => {

  const tileList = props.tileList;
  return (
    <div className="tile-list">
      {tileList.map((tile, index) => {
        <Tile value={tile} key={index} />
      })
      }</div>)

};
