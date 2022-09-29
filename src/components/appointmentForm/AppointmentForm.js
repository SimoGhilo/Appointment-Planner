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

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChange = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={setTitle} />
      <input type="date" value={date} onChange={setDate} />
      <input type="time" value={time} onChange={setTime} />
      <ContactPicker onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};
