import React from "react";
import App from "../../App";
import { ContactPicker } from "../contactPicker/ContactPicker";


export const AppointmentForm = (props) => {
  const title = props.title;
  const setTitle = props.setTitle;
  const date = props.date;
  const setDate = props.setDate;
  const time = props.time;
  const setTime = props.setTime;
  const handleSubmit = props.handleSubmit;
  const contacts = props.contacts;
  const contact = props.contact;
  const setContact = props.setContact;

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input type="text" value={title} onChange={(e) => props.setTitle(e.target.value)} />
      <label>Date</label>
      <input type="date" min={getTodayString()} value={date} onChange={(e) => props.setDate(e.target.value)} />
      <label>Time</label>
      <input type="time" value={time} onChange={(e) => props.setTime(e.target.value)} />
      <ContactPicker contacts={contacts}
        value={contact}
        onChange={(e) => setContact(e.target.value)} />
      <button type="Submit">Submit</button>
    </form>
  );
};
