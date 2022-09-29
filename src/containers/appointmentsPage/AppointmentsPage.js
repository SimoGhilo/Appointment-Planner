import React, { useState } from "react";
import App from "../../App";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
export const AppointmentsPage = (props) => {

  const appointments = props.appointments;
  const contacts = props.contacts;
  const addAppointments = props.onAdd;

  const [currentTitle, setCurrentTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointments({
      title: currentTitle,
      contact: contact,
      date: date,
      time: time,
    });
    setCurrentTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section currentTitle={currentTitle} contact={contact} date={date} time={time}
        setCurrentTitle={setCurrentTitle} setContact={setContact} setDate={setDate} setTime={setTime}
        handleSubmit={handleSubmit}>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section tileList={appointments}>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
