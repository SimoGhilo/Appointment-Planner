import React from "react";
import App from "../../App";
import { AppointmentForm } from "../appointmentForm/AppointmentForm";

export const ContactPicker = (props) => {

  const contacts = props.contacts;
  const handleChange = props.handleChange;


  return (
    <select onChange={handleChange}>
      <option value="No value selected" selected="selected"></option>
      {contacts.map((contact, index) => {
        return (<option value={contact} key={index}>{contact}</option>)
      }

      )
      }
    </select>
  );
};
